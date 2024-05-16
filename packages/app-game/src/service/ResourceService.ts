import { useState } from "react";
import { Resource } from "../classes/ResourceClass";

// Mock-Up
const mockUpData = [
  new Resource(300, 300, "white", false, 0, 0, 1),
  new Resource(300, 300, "white", false, 0, 0, 1),
  new Resource(500, 500, "white", false, 2, 0, 1),
  new Resource(200, 200, "white", false, 4, 0, 1),
  new Resource(280, 120, "white", false, 6, 0, 1),
];

export function useResources() {
  const [resources, setResources] = useState<Resource[]>(mockUpData);
  const [selectedResources, setSelectedResources] = useState<Resource[]>([]);

  const addResource = (newResource: Resource) => {
    setResources((prevResources) => [...prevResources, newResource]);
  };

  const updateResource = (resourceIndex: number, updatedResource: Resource) => {
    setResources((prevResources) => prevResources.map((rect, index) => (index === resourceIndex ? updatedResource : rect)));
  };

  const removeResource = (resourceIndex: number) => {
    setResources((prevResources) => prevResources.filter((_, index) => index !== resourceIndex));
  };

  const getResourceByIndex = (index: number) => {
    return resources[index];
  };

  const getResources = () => {
    return resources;
  };

  const removeResourceByIndex = (indexToRemove: number) => {
    resources.splice(indexToRemove, 1);
  };

  return {
    resources,
    setResources,
    addResource,
    getResourceByIndex,
    getResources,
    removeResourceByIndex,
  };
}
