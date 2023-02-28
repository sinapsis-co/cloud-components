/* eslint-disable @typescript-eslint/no-non-null-assertion */
// import DependenTree from '@square/dependentree';
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/ban-ts-comment
// @ts-ignore
import DependenTree from '@square/dependentree';
import { graphNodes, orderedNodeGroups } from './dep-generator';

const tree = new DependenTree('div#tree');
tree.addEntities(graphNodes);

const countriesDropDown = document.getElementById('serviceSelector')!;
const serviceOrder = document.getElementById('deployOrder')!;

serviceOrder.innerHTML = orderedNodeGroups
  .map((o) => {
    const nodes = o.nodes.map((e) => `<li>${e.id}</li>`);
    return `<div style="text-align:center;">
    <label">Stage ${o.group + 1}</label>
    <ul>${nodes.join('')}</ul>
    </div>
    `;
  })
  .join(' ');

graphNodes
  .sort((a, b) => {
    if (a._name > b._name) return 1;
    if (a._name > b._name) return 1;
    if (a._name < b._name) return -1;
    else return 0;
  })
  .forEach((r) => {
    const option = document.createElement('option');
    option.innerText = `${r._name} (${r._deps.length} deps)`;
    option.value = `${r._name}`;
    countriesDropDown.appendChild(option);
  });

countriesDropDown.addEventListener('change', (e) => {
  const target = e.target as HTMLInputElement;
  if (target) {
    tree.setTree(target.value, 'upstream');
    tree.horizontalSpaceBetweenNodes(40);
  }
});
