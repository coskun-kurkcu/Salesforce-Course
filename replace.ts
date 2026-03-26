import * as fs from 'fs';
import * as path from 'path';

const replacements: Record<string, string> = {
  'bg-slate-950': 'dark:bg-slate-950 bg-white',
  'bg-slate-900': 'dark:bg-slate-900 bg-blue-50',
  'bg-slate-800': 'dark:bg-slate-800 bg-blue-100',
  'bg-slate-700': 'dark:bg-slate-700 bg-blue-200',
  'text-white': 'dark:text-white text-slate-900',
  'text-slate-50': 'dark:text-slate-50 text-slate-900',
  'text-slate-300': 'dark:text-slate-300 text-slate-700',
  'text-slate-400': 'dark:text-slate-400 text-slate-600',
  'border-slate-900': 'dark:border-slate-900 border-blue-100',
  'border-slate-800': 'dark:border-slate-800 border-blue-200',
  'border-slate-700': 'dark:border-slate-700 border-blue-300',
  'hover:bg-slate-800': 'dark:hover:bg-slate-800 hover:bg-blue-100',
  'hover:bg-slate-700': 'dark:hover:bg-slate-700 hover:bg-blue-200',
  'hover:border-slate-700': 'dark:hover:border-slate-700 hover:border-blue-300',
  'hover:text-white': 'dark:hover:text-white hover:text-slate-900',
};

function processFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  for (const [oldClass, newClass] of Object.entries(replacements)) {
    // Replace exact matches not preceded by dark: or hover: (unless part of oldClass)
    // and not followed by / (opacity)
    const regex = new RegExp(`(?<!dark:)(?<!hover:)(?<!focus:)\\b${oldClass}\\b(?!/)`, 'g');
    content = content.replace(regex, newClass);
    
    // Replace opacity variants
    const regexOp = new RegExp(`(?<!dark:)(?<!hover:)(?<!focus:)\\b${oldClass}/(\\d+)\\b`, 'g');
    content = content.replace(regexOp, (match, opacity) => {
      const newBase = newClass.split(' ');
      return `${newBase[0]}/${opacity} ${newBase[1]}/${opacity}`;
    });
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walk('./src');
