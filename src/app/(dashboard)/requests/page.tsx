import Image from "next/image";
import RequestHeader from "./sections/RequestHeader";

export default function RequestPage() {
  return (
    <main className="flex-col-view gap-6">
      <RequestHeader/>
    </main>
  );
}
