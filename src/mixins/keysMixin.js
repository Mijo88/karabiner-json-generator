import { title } from '@/util';
import { keyCodes, keyLabels } from '@/data';

export default {
  data() {
    return {
      keys: keyCodes.map((key) => keyLabels[key.name] || title(key.name)),
    };
  },
};
