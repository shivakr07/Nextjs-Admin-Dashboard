
import "./page.css"
import Link from "next/link";

export default function Home() {
  return (
      <div className="container">
        <div className="content">
          <Link href="/dashboard">
            <button>Go to Dashboard </button>
          </Link>
        </div>
      </div>  

  );
}