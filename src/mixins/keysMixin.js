import { title } from '@/util';
import { keyCodes, keyLabels } from '@/data';

export default {
  data() {
    return {
      keys: keyCodes.map((key) => ({
        ...key,
        label: keyLabels[key.name] || title(key.name),
      })),
    };
  },
};
