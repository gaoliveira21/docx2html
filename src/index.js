#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');
const app = require('./app');

program.version(package.version);

program.command('convert <docxpath> <outputdir> <outputfilename>')
  .description('Converte um arquivo .docx para .html')
  .action((docxpath, outputdir, outputfilename) => {
    app(docxpath, outputdir, outputfilename);
  });

program.parse(process.argv);
