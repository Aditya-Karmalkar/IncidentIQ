import { redirect } from 'next/navigation';

export default async function InvestigationPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const params = await searchParams;
  const id = params?.id;
  redirect(id ? `/dashboard?tab=investigation&id=${id}` : '/dashboard?tab=investigation');
}
