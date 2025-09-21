
export type Credential = {
  name: string;
  issuer: string;
  date: string;
  status: 'Verified' | 'Pending';
};

export const credentials: Credential[] = [];
