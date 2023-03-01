/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { artifacts } from '../../../templates/cdk.out/manifest.json';

export interface Node {
  id: string;
  dependencies: string[];
}

interface GroupedNodes {
  group: number;
  nodes: Node[];
}

const cdkArtifacts: Record<string, { type: string; dependencies?: string[] }> = artifacts;

const graph: Node[] = Object.keys(cdkArtifacts)
  .filter((e) => !e.endsWith('.assets') && e !== 'Tree')
  .map((e) => {
    const dependencies =
      cdkArtifacts[e].dependencies && cdkArtifacts[e].dependencies!.length > 0
        ? cdkArtifacts[e]
            .dependencies!.filter((dep) => !dep.endsWith('.assets'))
            .map((dep) => dep.split('-')[2])
            .filter((dep) => dep)
        : [];
    return { id: e.split('-')[2], dependencies };
  })
  .filter((e) => e.id !== undefined)
  .sort((a, b) => a.dependencies.length - b.dependencies.length);

export const graphNodes = graph.map((g) => ({ _name: g.id, _deps: g.dependencies }));

// console.log(graphNodes);

export const orderNodes = (nodes: Node[]): GroupedNodes[] => {
  const groups: GroupedNodes[] = [];
  let currentGroup = 0;
  let nodesToProcess = nodes.slice();

  while (nodesToProcess.length > 0) {
    const currentNodes = nodesToProcess.filter((node) => {
      return node.dependencies.every((dependency) => {
        return groups.some((group) => {
          return group.nodes.some((groupNode) => {
            return groupNode.id === dependency;
          });
        });
      });
    });

    groups.push({
      group: currentGroup,
      nodes: currentNodes,
    });

    currentGroup++;
    nodesToProcess = nodesToProcess.filter((node) => !currentNodes.includes(node));
  }

  return groups;
};

export const orderedNodeGroups = orderNodes(graph);

// console.log(orderedNodeGroups.length); // Output: [["d", "e"], ["b", "c"], ["a"]]
// console.log(JSON.stringify(orderedNodeGroups, null, 2)); // Output: [["d", "e"], ["b", "c"], ["a"]]

// orderedNodeGroups.map((g) => console.log(g.nodes.map((n) => n.id)));
