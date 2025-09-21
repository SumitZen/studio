
'use client';

import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FilePlus2, Upload } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { collection, addDoc, onSnapshot, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

type Credential = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  status: 'Verified' | 'Pending';
  fileUrl?: string;
};

export default function CredentialsPage() {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [newCredential, setNewCredential] = useState({
    name: '',
    issuer: '',
    date: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'credentials'), where('userId', '==', user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const userCredentials: Credential[] = [];
        querySnapshot.forEach((doc) => {
          userCredentials.push({ id: doc.id, ...doc.data() } as Credential);
        });
        setCredentials(userCredentials);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAddCredential = async () => {
    if (!user || !newCredential.name || !newCredential.issuer || !newCredential.date) {
        toast({ title: "Error", description: "Please fill in all fields.", variant: "destructive" });
        return;
    }

    setIsUploading(true);
    let fileUrl = '';
    
    try {
        if (file) {
            const storageRef = ref(storage, `credentials/${user.uid}/${file.name}`);
            const uploadTask = await uploadBytes(storageRef, file);
            fileUrl = await getDownloadURL(uploadTask.ref);
        }

        await addDoc(collection(db, 'credentials'), {
            userId: user.uid,
            ...newCredential,
            status: 'Pending',
            fileUrl,
        });

        setNewCredential({ name: '', issuer: '', date: '' });
        setFile(null);
        setIsDialogOpen(false);
        toast({ title: "Success", description: "Credential added successfully." });
    } catch (error) {
        console.error("Error adding document: ", error);
        toast({ title: "Error", description: "Failed to add credential.", variant: "destructive" });
    } finally {
        setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Credentials</h1>
        <p className="text-muted-foreground">
          View and manage your uploaded credentials.
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle>Your Documents</CardTitle>
            <CardDescription>
              All your uploaded certificates and documents.
            </CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <FilePlus2 className="mr-2" />
                Add Credential
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Credential</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newCredential.name}
                    onChange={(e) =>
                      setNewCredential({ ...newCredential, name: e.target.value })
                    }
                    className="col-span-3"
                    placeholder="e.g., Certified JavaScript Developer"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="issuer" className="text-right">
                    Issuer
                  </Label>
                  <Input
                    id="issuer"
                    value={newCredential.issuer}
                    onChange={(e) =>
                      setNewCredential({ ...newCredential, issuer: e.target.value })
                    }
                    className="col-span-3"
                    placeholder="e.g., Tech University"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={newCredential.date}
                    onChange={(e) =>
                      setNewCredential({ ...newCredential, date: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="file" className="text-right">
                    Document
                  </Label>
                  <div className="col-span-3">
                     <Input id="file" type="file" onChange={handleFileChange} className="pt-1.5" />
                     {file && <p className="text-xs mt-1 text-muted-foreground">{file.name}</p>}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={handleAddCredential} disabled={isUploading}>
                  {isUploading ? 'Adding...' : 'Add Credential'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Credential</TableHead>
                <TableHead className="hidden sm:table-cell">Issuer</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {credentials.map((credential) => (
                <TableRow key={credential.id}>
                  <TableCell className="font-medium">
                    <a 
                      href={credential.fileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={credential.fileUrl ? "hover:underline" : ""}
                    >
                      {credential.name}
                    </a>
                    <p className="text-muted-foreground sm:hidden">{credential.issuer}</p>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{credential.issuer}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(credential.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        credential.status === 'Verified'
                          ? 'default'
                          : 'secondary'
                      }
                      className={
                        credential.status === 'Verified'
                          ? 'bg-green-600/20 text-green-400 border-green-600/20'
                          : ''
                      }
                    >
                      {credential.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
