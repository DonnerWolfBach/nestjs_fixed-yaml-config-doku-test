
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
  return (<Record<string,string>>
    yaml.load(
      readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
    ));
};