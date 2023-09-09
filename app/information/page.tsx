import Card from "@/components/Card/Card";
import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "@/models/routes.model";
import React from "react";

export default function Information() {
  return (
    <div className="text-sky-200">
      <Navigator pathNames={ [ Routes.HOME, Routes.CHARACTERES, Routes.LOCATIONS ] } />
      <Card /> 
      
    </div>
  );
}
