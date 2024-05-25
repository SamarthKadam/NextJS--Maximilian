import Messages from '@/components/messages';

// export const revalidate=5;
export const dynamic='force-dynamic'
// this all means I disable full routing cache

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages');
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
