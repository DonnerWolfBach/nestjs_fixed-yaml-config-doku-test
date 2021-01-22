This is an example for using a yaml file as config-file in nestjs, using the ConfigService.

The configuration.ts makes the content of the config.yaml usable for a ConfigService. This means, that like this you can load it into the ConfigModule like shown in app.module.ts.

The changes in nest-cli.json ensures that the config.yaml is copied into the dist directory (tribute to jmcdo29, who figured it out).

The rest is standard ConfigService stuff.