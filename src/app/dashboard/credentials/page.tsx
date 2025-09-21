
'use client';

import { useState } from 'react';
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
import { FilePlus2 } from 'lucide-react';
import { credentials as initialCredentials } from '@/lib/data';

type Credential = {
  name: string;
  issuer: string;
  date: string;
  status: 'Verified' | 'Pending';
};

export default function CredentialsPage() {
  const [credentials, setCredentials] =
    useState<Credential[]>(initialCredentials);
  const [newCredential, setNewCredential] = useState({
    name: '',
    issuer: '',
    date: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCredential = () => {
    if (newCredential.name && newCredential.issuer && newCredential.date) {
      setCredentials([
        ...credentials,
        { ...newCredential, status: 'Pending' },
      ]);
      setNewCredential({ name: '', issuer: '', date: '' });
      setIsDialogOpen(false);
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
        <CardHeader className="flex flex-row items-center justify-between">
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
                Upload Credential
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
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={handleAddCredential}>Add Credential</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Credential</TableHead>
                <TableHead>Issuer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {credentials.map((credential, index) => (
                <TableRow key={`${credential.name}-${index}`}>
                  <TableCell className="font-medium">
                    {credential.name}
                  </TableCell>
                  <TableCell>{credential.issuer}</TableCell>
                  <TableCell>
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
