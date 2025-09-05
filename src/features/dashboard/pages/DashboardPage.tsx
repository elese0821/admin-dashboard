import KpiCard from '@/components/dashboard/KpiCard';

export default function DashboardPage() {
    const recent: Array<{ name: string; email: string; createdAt: string }> = [];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold">대시보드</h2>
                <p className="text-sm text-muted-foreground">오늘 지표와 최근 활동을 확인하세요.</p>
            </div>

            <section className="grid gap-4 md:grid-cols-3">
                <KpiCard label="총 매출" value="₩120,000,000" help="지난 7일 +12%" />
                <KpiCard label="신규 가입" value="1,245" help="지난 7일 +5%" />
                <KpiCard label="활성 사용자" value="8,923" help="실시간 집계" />
            </section>

            <section className="rounded-lg border bg-background">
                <div className="flex items-center justify-between border-b px-4 py-3">
                    <h3 className="text-sm font-medium">최근 사용자</h3>
                    <a className="text-sm text-blue-600 hover:underline" href="/users">전체 보기</a>
                </div>

                {recent.length === 0 ? (
                    <div className="p-8 text-center text-sm text-muted-foreground">
                        최근 데이터가 없어요. <span className="underline decoration-dotted">유저가 생성되면 여기 표시됩니다.</span>
                    </div>
                ) : (
                    <div className="overflow-x-auto p-2">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="text-left text-muted-foreground">
                                    <th className="px-3 py-2 font-medium">이름</th>
                                    <th className="px-3 py-2 font-medium">이메일</th>
                                    <th className="px-3 py-2 font-medium">가입일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recent.map((r) => (
                                    <tr key={r.email} className="border-t">
                                        <td className="px-3 py-2">{r.name}</td>
                                        <td className="px-3 py-2">{r.email}</td>
                                        <td className="px-3 py-2">{r.createdAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </div>
    )
}
