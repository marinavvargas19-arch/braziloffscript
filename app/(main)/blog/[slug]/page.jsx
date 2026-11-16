import { notFound } from "next/navigation";
import TravelGuide,{guideMetadata} from "@/components/travel-guide";
import {slug} from "@/lib/travel-guide";
export function generateStaticParams(){return [{slug}];}
export async function generateMetadata({params}){return (await params).slug===slug?guideMetadata():{title:"Not found",robots:{index:false}};}
export default async function Page({params}){if((await params).slug!==slug)notFound();return <TravelGuide/>;}
