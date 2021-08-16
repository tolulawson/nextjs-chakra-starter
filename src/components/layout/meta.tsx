import Head from 'next/head';

type MetaProps = {
  title: string;
}
export default function Meta({ title }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}
