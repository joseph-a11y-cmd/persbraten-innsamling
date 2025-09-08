'use client';

import React from "react";
import Image from "next/image";
import { Mail, Copy, ClipboardList, Shovel, Baby, Store, LucideIcon } from "lucide-react";

// ===== Helper: copy-to-clipboard =====
async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    alert(`Kopiert: ${text}`);
  } catch (e) {
    console.error(e);
  }
}

// ===== Small UI building blocks =====
const Section = ({ id, title, children, kicker }: { id: string; title: string; children: React.ReactNode; kicker?: string }) => (
  <section id={id} className="mx-auto max-w-5xl px-4 py-14 md:py-20">
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-sky-700/80">{kicker}</p>
      )}
      <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">{title}</h2>
    </div>
    <div className="mt-8 md:mt-12">{children}</div>
  </section>
);

const Card = ({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 ring-1 ring-sky-100">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <div className="mt-3 text-slate-700 leading-relaxed">{children}</div>
  </div>
);

export default function FundraiserLanding() {
  const vipps = "4039UQ"; // <-- SETT RIKTIG VIPPS-NR HER
  const konto = "1229.18.11068"; // <-- SETT RIKTIG KONTONR HER
  const email = "persbraten.tur@gmail.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 text-slate-800">
      {/* Header / Hero */}
      <header className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/header.jpg"
          alt="Persbråten class ski trip"
          fill
          className="object-cover absolute inset-0"
        />

      

        {/* Hero text overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center text-white px-4 z-0">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Vi hjelper deg – så du kan hjelpe oss!
          </h1>
        </div>
      </header>

      {/* Main text */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center text-slate-800">
        <p>
          Vi er elever i 2. klasse på idrettslinjen på Persbråten som drømmer om en skikkelig
          fellestur vinteren 2025. En tur med gode opplevelser og minner for livet. For å gjøre
          drømmen mulig må vi tjene inn pengene som trengs. Vi tar på oss ulike jobber – små og store.
          Kanskje vi kan hjelpe deg?
        </p>
      </section>

      {/* What we can do */}
      <Section id="tjenester" title="Hva vi kan gjøre for deg" kicker="Oppdrag">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <Card icon={Shovel} title="Hjelp i og rundt hjemmet">
            Plukke epler, handle for deg, hente pant eller bidra med flyttehjelp.
          </Card>
          <Card icon={Baby} title="Barnevakt & leksehjelp">
            Trygg barnevakt eller engasjert leksehjelp etter behov.
          </Card>
          <Card icon={Store} title="Oppdrag for nærmiljøet">
            Butikker, seniorsenter eller idrettsarrangementer – vi hjelper gjerne.
          </Card>
          <Card icon={ClipboardList} title="Andre oppdrag">
            Har du noe annet du trenger hjelp med? Ta kontakt – vi finner en løsning.
          </Card>
        </div>
      </Section>

      {/* How to contribute */}
      <Section id="stotte" title="Slik kan du bidra" kicker="Støtt oss">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-lg md:text-xl font-semibold text-slate-900">Gi oss en jobb – vi stiller opp!</p>
            <div className="mt-5 grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between rounded-xl ring-1 ring-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm text-slate-500">Vipps</p>
                  <p className="text-xl font-semibold tracking-wider">{vipps}</p>
                </div>
                <button onClick={() => copy(vipps)} className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 hover:shadow">
                  <Copy className="h-4 w-4" /> Kopier
                </button>
              </div>
              <div className="flex items-center justify-between rounded-xl ring-1 ring-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm text-slate-500">Kontonummer</p>
                  <p className="text-xl font-semibold tracking-wider">{konto}</p>
                </div>
                <button onClick={() => copy(konto)} className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 hover:shadow">
                  <Copy className="h-4 w-4" /> Kopier
                </button>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={`mailto:${email}?subject=Oppdrag%20til%20Persbråten%202.klasse&body=Hei!%20Jeg%20har%20et%20oppdrag%20til%20dere...`}
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-white shadow hover:bg-sky-700 transition"
              >
                <Mail className="h-4 w-4" /> Send e-post
              </a>
              <p className="mt-3 text-sm text-slate-600">{email}</p>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-slate-600">
            All støtte går direkte til å gjøre fellesturen mulig!
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Persbråten vgs · Idrett 2. klasse</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#tjenester" className="hover:text-slate-900">Tjenester</a>
            <a href="#stotte" className="hover:text-slate-900">Støtt oss</a>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-1 hover:text-slate-900">
              <Mail className="h-4 w-4" /> Kontakt
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
