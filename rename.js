const fs = require('fs');
const path = require('path');

const b = '/home/emanuel/Área de trabalho/devs/ryzen-site/src/components';
try { fs.renameSync(path.join(b, 'Evalution'), path.join(b, 'Evaluation')); } catch (e) {}
try { fs.renameSync(path.join(b, 'PlanTimeSwich'), path.join(b, 'PlanTimeSwitch')); } catch (e) {}

const evalIdx = path.join(b, 'Evaluation/index.tsx');
if (fs.existsSync(evalIdx)) {
    let content = fs.readFileSync(evalIdx, 'utf-8');
    content = content.replace(/Evalution/g, 'Evaluation').replace(/functionemp/g, 'role');
    fs.writeFileSync(evalIdx, content);
}

const planIdx = path.join(b, 'PlanTimeSwitch/index.tsx');
if (fs.existsSync(planIdx)) {
    let content = fs.readFileSync(planIdx, 'utf-8');
    content = content.replace(/PlanTimeSwich/g, 'PlanTimeSwitch').replace(/quartetely/g, 'quarterly');
    fs.writeFileSync(planIdx, content);
}
