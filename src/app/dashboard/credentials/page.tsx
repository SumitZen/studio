
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
import { FilePlus2 } from 'lucide-react';

const credentials = [
  {
    name: 'Certified JavaScript Developer',
    issuer: 'Tech University',
    date: '2023-10-26',
    status: 'Verified',
  },
  {
    name: 'Advanced React Course',
    issuer: 'Online Learning Platform',
    date: '2023-08-15',
    status: 'Verified',
  },
  {
    name: 'Cloud Practitioner Certificate',
    issuer: 'Cloud Services Inc.',
    date: '2024-01-05',
    status: 'Pending',
  },
  {
    name: 'B.Sc. Computer Science',
    issuer: 'State University',
    date: '2022-05-20',
    status: 'Verified',
  },
];

export default function CredentialsPage() {
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
          <Button>
            <FilePlus2 className="mr-2" />
            Upload Credential
          </Button>
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
              {credentials.map((credential) => (
                <TableRow key={credential.name}>
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
