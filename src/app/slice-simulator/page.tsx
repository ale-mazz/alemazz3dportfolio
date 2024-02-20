"use client";

import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { SliceSimulator } from "@slicemachine/adapter-next/simulator";

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      sliceZone={(props) => <SliceZone {...props} components={components} />}
    />
  );
}
