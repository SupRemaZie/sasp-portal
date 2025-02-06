// pages/dashboard.tsx
import Layout from "@/components/ui/layout";
import Image from "next/image";

export default function DashboardPage() {
  return (
      <Layout>
        {/* Conteneur principal centré */}
        <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-gray-700 p-6">

          {/* Logo SASP */}
          <div className="mb-8">
            <Image
                src="/logo.png"
                alt="Logo SASP"
                width={150}
                height={150}
                priority
            />
          </div>

          {/* Titre et description */}
          <h1 className="text-4xl font-bold text-white mb-4">Dashboard SASP</h1>
          <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
            Bienvenue sur le tableau de bord de la plateforme SASP.
          </p>

          {/* Boîte des fonctionnalités */}
          <div className="max-w-3xl text-lg text-white bg-gradient-to-b from-blue-600 to-blue-900 shadow-lg p-6 rounded-xl mx-auto">
            <p className="mb-4">
              La plateforme SASP vous permet de gérer vos données et suivre vos performances de manière simple et efficace. Voici quelques-unes de nos fonctionnalités clés :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestion de vos données utilisateurs</li>
              <li>Analyse des performances en temps réel</li>
              <li>Création de rapports personnalisés</li>
              <li>Tableaux de bord interactifs</li>
              <li>Soutien 24/7 avec notre équipe de support</li>
            </ul>
          </div>
        </div>
      </Layout>
  );
}
