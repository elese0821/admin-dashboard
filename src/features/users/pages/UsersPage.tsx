import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function UsersPage() {
    const items: any[] = [];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Users</h2>
                <Button>유저 추가</Button>
            </div>

            <div className="rounded-lg border bg-background p-4">
                <div className="flex items-center gap-3">
                    <Input placeholder="이름/이메일 검색" className="w-64" />
                    <Button variant="outline">활성만</Button>
                </div>
                <Separator className="my-4" />

                {items.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground">
                        데이터가 없습니다.
                    </div>
                ) : (
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-left text-muted-foreground">
                                <th className="px-3 py-2">이름</th>
                                <th className="px-3 py-2">이메일</th>
                                <th className="px-3 py-2">상태</th>
                                <th className="px-3 py-2">가입일</th>
                                <th className="px-3 py-2" />
                            </tr>
                        </thead>
                        <tbody>
                            {/* 나중에 items.map() 으로 채우기 */}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
