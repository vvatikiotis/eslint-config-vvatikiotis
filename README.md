# My eslint rules

[![dependencies](https://david-dm.org/vvatikiotis/eslint-config-vvatikiotis.svg)](https://david-dm.org/vvatikiotis/eslint-config-vvatikiotis)
[![devDependency Status](https://david-dm.org/vvatikiotis/eslint-config-vvatikiotis/dev-status.svg)](https://david-dm.org/vvatikiotis/eslint-config-vvatikiotis#info=devDependencies)

To create your eslint config package:
1. Create your eslint-config project just like this one.
1. When ready, `npm link`.
1. Install globally all dependencies specified in your eslint-config package.
1. Create a home `.eslintrc`, extending your globally linked eslint config (from
previous step). You can always override with a project local `.eslintrc`.

To use your eslint config package in your projects:
1. `npm link eslint-config-your-config`.
1. All the config and plugin packages specified in your eslint-config package must
be linked in your project.

I don't like the mandatory linking stuff. If you know a better way please create
an issue.
