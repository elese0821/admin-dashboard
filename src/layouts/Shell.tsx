import Header from "@/components/common/Header";
import { Link, Outlet } from "react-router";


export default function Shell() {
    return (
        <div className="grid min-h-screen grid-rows-[56px_1fr] bg-muted/20">
            {/* Header 자리 */}
            <Header />

            {/* Sidebar + Main */}
            <div className="grid grid-cols-[200px_1fr]">
                <aside className="border-r p-4">
                    <nav className="flex flex-col gap-2 text-sm">
                        <Link to="/">Dashboard</Link>
                        <Link to="/users">Users</Link>
                    </nav>
                </aside>

                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
