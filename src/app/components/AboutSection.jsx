"use client";
import { TypeAnimation } from "react-type-animation";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "¿Para qué?",
    id: "¿Para qué?",
    content: (
      <ul className="list-disc pl-2">
        <li>Publicidad</li>
        <li>Informacion publica</li>
        <li>Seguridad, Instrucciones o direcciones</li>
        <li>Educacion</li>
        <li>Activismo y protesta</li>
        <li>Decoracion</li>
        <li>Identificacion</li>
      </ul>
    ),
  },
  {
    title: "¿Cuándo?",
    id: "¿Cuándo?",
    content: (
      <ul className="list-disc pl-2">
        <li>Eventos promocionales</li>
        <li>Campanas politicas</li>
        <li>Educacion</li>
        <li>Publicidad</li>
        <li>Seguridad</li>
        <li>Manifestaciones y protestas</li>
      </ul>
    ),
  },
  {
    title: "¿Cómo?",
    id: "¿Cómo?",
    content: (
      <ul className="list-disc pl-2">
        <li>Diseno</li>
        <li>Contenido</li>
        <li>Formato</li>
        <li>Impresion</li>
        <li>Colocacion</li>
      </ul>
    ),
  },
  {
    title: "¿Dónde?",
    id: "¿Dónde?",
    content: (
      <ul className="list-disc pl-2">
        <li>Calles y carreteras</li>
        <li>Comercios</li>
        <li>Instituciones educativas</li>
        <li>Lugares publicos</li>
        <li>Manifestaciones y protestas</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("¿Para qué?");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={459} height={641} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <TypeAnimation
            className="text-4xl mb-4 text-white lg:text-md"
            sequence={[
              "¿Qué es un cartel?",
              5000,
              "¿Para qué sirve un cartel?",
              5000,
              "¿Cuándo se utiliza un cartel?",
              5000,
              "¿Cómo se utiliza un cartel?",
              5000,
              "¿Dónde se usa un cartel?",
              5000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

          <p className="text-base lg:text-lg">
            Un cartel es una pieza gráfica o visual que combina imágenes, texto
            y diseño para comunicar un mensaje o información de manera efectiva.
            Puede ser impreso en papel, cartón, tela o incl6uso digital, para
            ser utilizado en diversos contextos, como publicidad, educación,
            información pública, protestas, eventos, entre otros.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("¿Para qué?")}
              active={tab === "¿Para qué?"}
            >
              {" "}
              ¿Para qué sirve?{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("¿Cuándo?")}
              active={tab === "¿Cuándo?"}
            >
              {" "}
              ¿Cuándo se utiliza?{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("¿Cómo?")}
              active={tab === "¿Cómo?"}
            >
              {" "}
              ¿Cómo se utiliza?{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("¿Dónde?")}
              active={tab === "¿Dónde?"}
            >
              {" "}
              ¿Dónde se utiliza?{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
