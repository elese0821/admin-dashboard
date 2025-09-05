type Props = { label: string; value: string; help?: string };

export default function KpiCard({ label, value, help }: Props) {
    return (
        <div className="rounded-lg border bg-background p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
            <div className="mt-2 text-2xl font-semibold">{value}</div>
            {help && <div className="mt-1 text-xs text-muted-foreground">{help}</div>}
        </div>
    )
}
