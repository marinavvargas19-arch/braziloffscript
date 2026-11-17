import CorporateEvents from '@/components/corporate-events';
import { corporateMetadata } from '@/lib/corporate-events';
export const metadata = corporateMetadata('es');
export default function Page() { return <CorporateEvents locale="es" />; }
