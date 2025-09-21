
export type Credential = {
  name: string;
  issuer: string;
  date: string;
  status: 'Verified' | 'Pending';
};

export const credentials: Credential[] = [
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
