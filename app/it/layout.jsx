import { LocaleDocument } from "@/components/layout/locale-document";

export default function Layout({ children }) {
  return <LocaleDocument locale="it">{children}</LocaleDocument>;
}
