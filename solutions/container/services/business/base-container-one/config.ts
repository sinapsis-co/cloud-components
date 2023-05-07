import { FargatePerformanceTunning } from '@sinapsis-co/cc-core/prefab/compute/fargate/service';
import { AllowedEnvName } from '../../../config/config-type';

export const performanceTunningMapper: Record<AllowedEnvName, FargatePerformanceTunning> = {
  dev: {
    taskCpu: '256',
    taskMemory: '512',
    containerDesiredCount: 1,
    taskAutoScaleMin: 1,
    taskAutoScaleMax: 2,
    taskAutoScalePercent: 75,
    containerMaxMemory: 75,
  },
  staging: {
    taskCpu: '256',
    taskMemory: '512',
    containerDesiredCount: 1,
    taskAutoScaleMin: 1,
    taskAutoScaleMax: 1,
    taskAutoScalePercent: 75,
    containerMaxMemory: 75,
  },
};
