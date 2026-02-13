import { HomePage } from "@/components/HomePage";

export default async function Page(props: any) {
  const sp = await props?.searchParams; // Promise일 수도 있어서 await
  const tab = typeof sp?.tab === "string" ? sp.tab : undefined;

  return <HomePage initialTab={tab} />;
}
