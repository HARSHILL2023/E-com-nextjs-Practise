import Link from "next/link";

export default function Students() {
  return (
    <div>
      <h1>Students</h1>

      <div>
        <h2>Harshil</h2>
        <Link href="/students/1">View Profile</Link>
      </div>

      <div>
        <h2>Rahul</h2>
        <Link href="/students/2">View Profile</Link>
      </div>

      <div>
        <h2>Amit</h2>
        <Link href="/students/3">View Profile</Link>
      </div>
    </div>
  );
}