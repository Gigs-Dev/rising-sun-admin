import UserHeader from "./sections/UserHeader";
import ManageUsers from "./sections/ManageUsers";
import UsersTable from "./sections/UsersTable";

export default function UsersPage() {
  return (
    <main className="flex-col-view gap-6">
      <UserHeader/>
      <ManageUsers/>
      <UsersTable/>
    </main>
  );
}
