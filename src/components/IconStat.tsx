import React from 'react';


export default function IconStat({ Icon, value, label, theme }: any) {
return (
<div style={{ padding: '2rem', backgroundColor: theme.background, borderRadius: 12, textAlign: 'center', border: `1px solid ${theme.primary}33`, transition: 'transform 0.3s' }}
onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'}
onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}>
<Icon size={40} style={{ color: theme.primary, margin: '0 auto 1rem' }} />
<div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: theme.primary, marginBottom: 8 }}>{value}</div>
<div style={{ color: theme.textMuted }}>{label}</div>
</div>
);
}