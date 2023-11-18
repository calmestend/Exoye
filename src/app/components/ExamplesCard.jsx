"use client";
import { TypeAnimation } from "react-type-animation";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

function ExamplesCard() {
  return (
    <section className="text-white flex justify-center items-center" id="about">
      <div>
        <h1>Ejemplo de cartel</h1>
        <Image src="/images/projects/1.png" width={720} height={1280} />
      </div>
    </section>
  );
}

export default ExamplesCard;
