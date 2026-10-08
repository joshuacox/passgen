'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, RefreshCw, Terminal, Shield, Key, Sparkles, Sliders, Zap } from 'lucide-react';

const FALLBACK_WORDS = [
  'acid', 'acorn', 'acre', 'acts', 'afar', 'affix', 'aged', 'agent', 'agile', 'aging', 'agony', 'ahead', 'aide', 'aids', 'aim', 'ajar', 'alarm', 'alias', 'alibi', 'alien', 'alike', 'alive', 'aloe', 'aloft', 'aloha', 'alone', 'amend', 'amino', 'ample', 'amuse', 'angel', 'anger', 'angle', 'ankle', 'apple', 'april', 'apron', 'aqua', 'area', 'arena', 'argue', 'arise', 'armed', 'armor', 'army', 'aroma', 'array', 'arson', 'art', 'ashen', 'ashes', 'atlas', 'atom', 'attic', 'audio', 'avert', 'avoid', 'awake', 'award', 'awoke', 'axis', 'bacon', 'badge', 'bagel', 'baggy', 'baked', 'baker', 'balmy', 'banjo', 'barge', 'barn', 'bash', 'basil', 'bask', 'batch', 'bath', 'baton', 'bats', 'blade', 'blank', 'blast', 'blaze', 'bleak', 'blend', 'bless', 'blimp', 'blink', 'bloat', 'blob', 'blog', 'blot', 'blunt', 'blurt', 'blush', 'boast', 'boat', 'body', 'boil', 'bok', 'bolt', 'boned', 'boney', 'bonus', 'bony', 'book', 'booth', 'boots', 'boss', 'botch', 'both', 'boxer', 'breed', 'bribe', 'brick', 'bride', 'brim', 'bring', 'brink', 'brisk', 'broad', 'broil', 'broke', 'brook', 'broom', 'brush', 'buck', 'bud', 'buggy', 'bulge', 'bulk', 'bully', 'bunch', 'bunny', 'bunt', 'bush', 'bust', 'busy', 'buzz', 'cable', 'cache', 'cadet', 'cage', 'cake', 'calm', 'cameo', 'canal', 'candy', 'cane', 'canon', 'cape', 'card', 'cargo', 'carol', 'carry', 'carve', 'case', 'cash', 'cause', 'cedar', 'chain', 'chair', 'chant', 'chaos', 'charm', 'chase', 'cheek', 'cheer', 'chef', 'chess', 'chest', 'chew', 'chief', 'chili', 'chill', 'chip', 'chomp', 'chop', 'chow', 'chuck', 'chump', 'chunk', 'churn', 'chute', 'cider', 'cinch', 'city', 'civic', 'civil', 'clad', 'claim', 'clamp', 'clap', 'clash', 'clasp', 'class', 'claw', 'clay', 'clean', 'clear', 'cleat', 'cleft', 'clerk', 'click', 'cling', 'clink', 'clip', 'cloak', 'clock', 'clone', 'cloth', 'cloud', 'clump', 'coach', 'coast', 'coat', 'cod', 'coil', 'coke', 'cola', 'cold', 'colt', 'coma', 'come', 'comic', 'comma', 'cone', 'cope', 'copy', 'coral', 'cork', 'cost', 'cot', 'couch', 'cough', 'cover', 'cozy', 'craft', 'cramp', 'crane', 'crank', 'crate', 'crave', 'crawl', 'crazy', 'creme', 'crepe', 'crept', 'crib', 'cried', 'crisp', 'crook', 'crop', 'cross', 'crowd', 'crown', 'crumb', 'crush', 'crust', 'cub', 'cult', 'cupid', 'cure', 'curl', 'curry', 'curse', 'curve', 'curvy', 'cushy', 'cut', 'cycle', 'dab', 'dad', 'daily', 'dairy', 'daisy', 'dance', 'dandy', 'darn', 'dart', 'dash', 'data', 'date', 'dawn', 'deaf', 'deal', 'dean', 'debit', 'debt', 'debug', 'decaf', 'decal', 'decay', 'deck', 'decor', 'decoy', 'deed', 'delay', 'denim', 'dense', 'dent', 'depth', 'derby', 'desk', 'dial', 'diary', 'dice', 'dig', 'dill', 'dime', 'dimly', 'diner', 'dingy', 'disco', 'dish', 'disk', 'ditch', 'ditzy', 'dizzy', 'dock', 'dodge', 'doing', 'doll', 'dome', 'donor', 'donut', 'dose', 'dot', 'dove', 'down', 'dowry', 'doze', 'drab', 'drama', 'drank', 'draw', 'dress', 'dried', 'drift', 'drill', 'drive', 'drone', 'droop', 'drove', 'drown', 'drum', 'dry', 'duck', 'duct', 'dude', 'dug', 'duke', 'duo', 'dusk', 'dust', 'duty', 'dwarf', 'dwell', 'eagle', 'early', 'earth', 'easel', 'east', 'eaten', 'eats', 'ebay', 'ebony', 'ebook', 'echo', 'edge', 'eel', 'eject', 'elbow', 'elder', 'elf', 'elk', 'elm', 'elope', 'elude', 'elves', 'email', 'emit', 'empty', 'emu', 'enter', 'entry', 'envoy', 'equal', 'erase', 'error', 'erupt', 'essay', 'etch', 'evade', 'even', 'evict', 'evil', 'evoke', 'exact', 'exit', 'fable', 'faced', 'fact', 'fade', 'fall', 'false', 'fancy', 'fang', 'fax', 'feast', 'feed', 'femur', 'fence', 'fend', 'ferry', 'fetal', 'fetch', 'fever', 'fiber', 'fifth', 'fifty', 'film', 'filth', 'final', 'finch', 'fit', 'five', 'flag', 'flaky', 'flame', 'flap', 'flask', 'fled', 'flick', 'fling', 'flint', 'flip', 'flirt', 'float', 'flock', 'flop', 'floss', 'flyer', 'foam', 'foe', 'fog', 'foil', 'folic', 'folk', 'food', 'fool', 'found', 'fox', 'foyer', 'frail', 'frame', 'fray', 'fresh', 'fried', 'frill', 'frisk', 'from', 'front', 'frost', 'froth', 'frown', 'froze', 'fruit', 'gag', 'gains', 'gala', 'game', 'gap', 'gas', 'gave', 'gear', 'gecko', 'geek', 'gem', 'genre', 'gift', 'gig', 'gills', 'given', 'giver', 'glad', 'glass', 'glide', 'gloss', 'glove', 'glow', 'glue', 'goal', 'going', 'golf', 'gong', 'good', 'gooey', 'goofy', 'gore', 'gown', 'grab', 'grain', 'grant', 'grape', 'graph', 'grasp', 'grass', 'grave', 'gravy', 'gray', 'green', 'greet', 'grew', 'grid', 'grief', 'grill', 'grip', 'grit', 'groom', 'grope', 'growl', 'grub', 'grunt', 'guide', 'gulf', 'gulp', 'gummy', 'guru', 'gush', 'gut', 'guy', 'habit', 'half', 'halo', 'halt', 'happy', 'harm', 'hash', 'hasty', 'hatch', 'hate', 'haven', 'hazel', 'hazy', 'heap', 'heat', 'heave', 'hedge', 'hefty', 'help', 'herbs', 'hers', 'hub', 'hug', 'hula', 'hull', 'human', 'humid', 'hump', 'hung', 'hunk', 'hunt', 'hurry', 'hurt', 'hush', 'hut', 'ice', 'icing', 'icon', 'icy', 'igloo', 'image', 'ion', 'iron', 'islam', 'issue', 'item', 'ivory', 'ivy', 'jab', 'jam', 'jaws', 'jazz', 'jeep', 'jelly', 'jet', 'jiffy', 'job', 'jog', 'jolly', 'jolt', 'jot', 'joy', 'judge', 'juice', 'juicy', 'july', 'jumbo', 'jump', 'junky', 'juror', 'jury', 'keep', 'keg', 'kept', 'kick', 'kilt', 'king', 'kite', 'kitty', 'kiwi', 'knee', 'knelt', 'koala', 'kung', 'ladle', 'lady', 'lair', 'lake', 'lance', 'land', 'lapel', 'large', 'lash', 'lasso', 'last', 'latch', 'late', 'lazy', 'left', 'legal', 'lemon', 'lend', 'lens', 'lent', 'level', 'lever', 'lid', 'life', 'lift', 'lilac', 'lily', 'limb', 'limes', 'line', 'lint', 'lion', 'lip', 'list', 'lived', 'liver', 'lunar', 'lunch', 'lung', 'lurch', 'lure', 'lurk', 'lying', 'lyric', 'mace', 'maker', 'malt', 'mama', 'mango', 'manor', 'many', 'map', 'march', 'mardi', 'marry', 'mash', 'match', 'mate', 'math', 'moan', 'mocha', 'moist', 'mold', 'mom', 'moody', 'mop', 'morse', 'most', 'motor', 'motto', 'mount', 'mouse', 'mousy', 'mouth', 'move', 'movie', 'mower', 'mud', 'mug', 'mulch', 'mule', 'mull', 'mumbo', 'mummy', 'mural', 'muse', 'music', 'musky', 'mute', 'nacho', 'nag', 'nail', 'name', 'nanny', 'nap', 'navy', 'near', 'neat', 'neon', 'nerd', 'nest', 'net', 'next', 'niece', 'ninth', 'nutty', 'oak', 'oasis', 'oat', 'ocean', 'oil', 'old', 'olive', 'omen', 'onion', 'only', 'ooze', 'opal', 'open', 'opera', 'opt', 'otter', 'ouch', 'ounce', 'outer', 'oval', 'oven', 'owl', 'ozone', 'pace', 'pagan', 'pager', 'palm', 'panda', 'panic', 'pants', 'panty', 'paper', 'park', 'party', 'pasta', 'patch', 'path', 'patio', 'payer', 'pecan', 'penny', 'pep', 'perch', 'perky', 'perm', 'pest', 'petal', 'petri', 'petty', 'photo', 'plank', 'plant', 'plaza', 'plead', 'plot', 'plow', 'pluck', 'plug', 'plus', 'poach', 'pod', 'poem', 'poet', 'pogo', 'point', 'poise', 'poker', 'polar', 'polio', 'polka', 'polo', 'pond', 'pony', 'poppy', 'pork', 'poser', 'pouch', 'pound', 'pout', 'power', 'prank', 'press', 'print', 'prior', 'prism', 'prize', 'probe', 'prong', 'proof', 'props', 'prude', 'prune', 'pry', 'pug', 'pull', 'pulp', 'pulse', 'puma', 'punch', 'punk', 'pupil', 'puppy', 'purr', 'purse', 'push', 'putt', 'quack', 'quake', 'query', 'quiet', 'quill', 'quilt', 'quit', 'quota', 'quote', 'rabid', 'race', 'rack', 'radar', 'radio', 'raft', 'rage', 'raid', 'rail', 'rake', 'rally', 'ramp', 'ranch', 'range', 'rank', 'rant', 'rash', 'raven', 'reach', 'react', 'ream', 'rebel', 'recap', 'relax', 'relay', 'relic', 'remix', 'repay', 'repel', 'reply', 'rerun', 'reset', 'rhyme', 'rice', 'rich', 'ride', 'rigid', 'rigor', 'rinse', 'riot', 'ripen', 'rise', 'risk', 'ritzy', 'rival', 'river', 'roast', 'robe', 'robin', 'rock', 'rogue', 'roman', 'romp', 'rope', 'rover', 'royal', 'ruby', 'rug', 'ruin', 'rule', 'runny', 'rush', 'rust', 'rut', 'sadly', 'sage', 'said', 'saint', 'salad', 'salon', 'salsa', 'salt', 'same', 'sandy', 'santa', 'satin', 'sauna', 'saved', 'savor', 'sax', 'say', 'scale', 'scam', 'scan', 'scare', 'scarf', 'scary', 'scoff', 'scold', 'scoop', 'scoot', 'scope', 'score', 'scorn', 'scout', 'scowl', 'scrap', 'scrub', 'scuba', 'scuff', 'sect', 'sedan', 'self', 'send', 'sepia', 'serve', 'set', 'seven', 'shack', 'shade', 'shady', 'shaft', 'shaky', 'sham', 'shape', 'share', 'sharp', 'shed', 'sheep', 'sheet', 'shelf', 'shell', 'shine', 'shiny', 'ship', 'shirt', 'shock', 'shop', 'shore', 'shout', 'shove', 'shown', 'showy', 'shred', 'shrug', 'shun', 'shush', 'shut', 'shy', 'sift', 'silk', 'silly', 'silo', 'sip', 'siren', 'sixth', 'size', 'skate', 'skew', 'skid', 'skier', 'skies', 'skip', 'skirt', 'skit', 'sky', 'slab', 'slack', 'slain', 'slam', 'slang', 'slash', 'slate', 'slaw', 'sled', 'sleek', 'sleep', 'sleet', 'slept', 'slice', 'slick', 'slimy', 'sling', 'slip', 'slit', 'slob', 'slot', 'slug', 'slum', 'slurp', 'slush', 'small', 'smash', 'smell', 'smile', 'smirk', 'smog', 'snack', 'snap', 'snare', 'snarl', 'sneak', 'sneer', 'sniff', 'snore', 'snort', 'snout', 'snowy', 'snub', 'snuff', 'speak', 'speed', 'spend', 'spent', 'spew', 'spied', 'spill', 'spiny', 'spoil', 'spoke', 'spoof', 'spool', 'spoon', 'sport', 'spot', 'spout', 'spray', 'spree', 'spur', 'squad', 'squat', 'squid', 'stack', 'staff', 'stage', 'stain', 'stall', 'stamp', 'stand', 'stank', 'stark', 'start', 'stash', 'state', 'stays', 'steam', 'steep', 'stem', 'step', 'stew', 'stick', 'sting', 'stir', 'stock', 'stole', 'stomp', 'stony', 'stood', 'stool', 'stoop', 'stop', 'storm', 'stout', 'stove', 'straw', 'stray', 'strut', 'stuck', 'stud', 'stuff', 'stump', 'stung', 'stunt', 'suds', 'sugar', 'sulk', 'surf', 'sushi', 'swab', 'swan', 'swarm', 'sway', 'swear', 'sweat', 'sweep', 'swell', 'swept', 'swim', 'swing', 'swipe', 'swirl', 'swoop', 'swore', 'syrup', 'tacky', 'taco', 'tag', 'take', 'tall', 'talon', 'tamer', 'tank', 'taper', 'taps', 'tarot', 'tart', 'task', 'taste', 'tasty', 'taunt', 'thank', 'thaw', 'theft', 'theme', 'thigh', 'thing', 'think', 'thong', 'thorn', 'those', 'throb', 'thud', 'thumb', 'thump', 'thus', 'tiara', 'tidal', 'tidy', 'tiger', 'tile', 'tilt', 'tint', 'tiny', 'trace', 'track', 'trade', 'train', 'trait', 'trap', 'trash', 'tray', 'treat', 'tree', 'trek', 'trend', 'trial', 'tribe', 'trick', 'trio', 'trout', 'truce', 'truck', 'trump', 'trunk', 'try', 'tug', 'tulip', 'tummy', 'turf', 'tusk', 'tutor', 'tutu', 'tux', 'tweak', 'tweet', 'twice', 'twine', 'twins', 'twirl', 'twist', 'uncle', 'uncut', 'undo', 'unify', 'union', 'unit', 'untie', 'upon', 'upper', 'urban', 'used', 'user', 'usher', 'utter', 'value', 'vapor', 'vegan', 'venue', 'verse', 'vest', 'veto', 'vice', 'video', 'view', 'viral', 'virus', 'visa', 'visor', 'vixen', 'vocal', 'voice', 'void', 'volt', 'voter', 'vowel', 'wad', 'wafer', 'wager', 'wages', 'wagon', 'wake', 'walk', 'wand', 'wasp', 'watch', 'water', 'wavy', 'wheat', 'whiff', 'whole', 'whoop', 'wick', 'widen', 'widow', 'width', 'wife', 'wifi', 'wilt', 'wimp', 'wind', 'wing', 'wink', 'wipe', 'wired', 'wiry', 'wise', 'wish', 'wispy', 'wok', 'wolf', 'womb', 'wool', 'woozy', 'word', 'work', 'worry', 'wound', 'woven', 'wrath', 'wreck', 'wrist', 'xerox', 'yahoo', 'yam', 'yard', 'year', 'yeast', 'yelp', 'yield', 'yo-yo', 'yodel', 'yoga', 'yoyo', 'yummy', 'zebra', 'zero', 'zesty', 'zippy', 'zone', 'zoom'
];

export function InteractiveGenerator() {
  const [mode, setMode] = useState<'password' | 'passphrase' | 'pin' | 'hex'>('password');
  const [length, setLength] = useState<number>(18);
  const [wordCount, setWordCount] = useState<number>(5);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [result, setResult] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generate = () => {
    if (typeof window === 'undefined') return;

    if (mode === 'password') {
      let chars = 'abcdefghijklmnopqrstuvwxyz';
      if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (includeNumbers) chars += '0123456789';
      if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

      const array = new Uint32Array(length);
      window.crypto.getRandomValues(array);
      let res = '';
      for (let i = 0; i < length; i++) {
        res += chars[array[i] % chars.length];
      }
      setResult(res);
    } else if (mode === 'passphrase') {
      const array = new Uint32Array(wordCount);
      window.crypto.getRandomValues(array);
      const words = Array.from(array).map(n => FALLBACK_WORDS[n % FALLBACK_WORDS.length]);
      setResult(words.join('-'));
    } else if (mode === 'pin') {
      const array = new Uint32Array(length);
      window.crypto.getRandomValues(array);
      let res = '';
      for (let i = 0; i < length; i++) {
        res += (array[i] % 10).toString();
      }
      setResult(res);
    } else if (mode === 'hex') {
      const byteLen = Math.ceil(length / 2);
      const array = new Uint8Array(byteLen);
      window.crypto.getRandomValues(array);
      const hex = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
      setResult(hex.slice(0, length));
    }
  };

  useEffect(() => {
    generate();
  }, [mode, length, wordCount, includeSymbols, includeNumbers, includeUppercase]);

  const copyToClipboard = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const calculateEntropy = () => {
    if (mode === 'password') {
      let pool = 26;
      if (includeUppercase) pool += 26;
      if (includeNumbers) pool += 10;
      if (includeSymbols) pool += 32;
      return Math.round(length * Math.log2(pool));
    } else if (mode === 'passphrase') {
      return Math.round(wordCount * Math.log2(FALLBACK_WORDS.length));
    } else if (mode === 'pin') {
      return Math.round(length * Math.log2(10));
    } else {
      return Math.round(length * Math.log2(16));
    }
  };

  const entropy = calculateEntropy();

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Key className="w-6 h-6 text-emerald-400" />
          <h2 className="text-xl font-bold tracking-tight text-white">Live Web Generator</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setMode('password')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'password'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Password
          </button>
          <button
            onClick={() => setMode('passphrase')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'passphrase'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Diceware
          </button>
          <button
            onClick={() => setMode('pin')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'pin'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            PIN
          </button>
          <button
            onClick={() => setMode('hex')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'hex'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Token Hex
          </button>
        </div>
      </div>

      {/* Result Display Box */}
      <div className="relative mb-6">
        <div className="bg-slate-950 border border-slate-700 rounded-xl p-4 sm:p-5 flex items-center justify-between gap-4 font-mono text-base sm:text-lg text-emerald-400 break-all select-all shadow-inner">
          <span className="tracking-wider">{result || 'Generating...'}</span>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={generate}
              title="Regenerate"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-6 bg-slate-950/50 px-4 py-2.5 rounded-lg border border-slate-800/80">
        <div className="flex items-center gap-2">
          <Shield className={`w-4 h-4 ${entropy > 75 ? 'text-emerald-400' : 'text-amber-400'}`} />
          <span>Calculated Entropy: <strong className="text-white">{entropy} bits</strong></span>
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
          entropy >= 80 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
        }`}>
          {entropy >= 100 ? 'Military Grade' : entropy >= 70 ? 'Very Strong' : 'Moderate'}
        </span>
      </div>

      {/* Controls */}
      <div className="space-y-5">
        {mode === 'passphrase' ? (
          <div>
            <div className="flex justify-between text-sm mb-2 text-slate-300">
              <span>Word Count: <strong className="text-emerald-400">{wordCount}</strong></span>
              <span className="text-xs text-slate-500">3 - 8 words</span>
            </div>
            <input
              type="range"
              min="3"
              max="8"
              value={wordCount}
              onChange={(e) => setWordCount(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        ) : (
          <div>
            <div className="flex justify-between text-sm mb-2 text-slate-300">
              <span>Length: <strong className="text-emerald-400">{length}</strong> characters</span>
              <span className="text-xs text-slate-500">6 - 64</span>
            </div>
            <input
              type="range"
              min="6"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        )}

        {mode === 'password' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer bg-slate-950/60 p-3 rounded-lg border border-slate-800 hover:border-slate-700">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="accent-emerald-500 w-4 h-4 rounded"
              />
              <span>Uppercase (A-Z)</span>
            </label>
            <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer bg-slate-950/60 p-3 rounded-lg border border-slate-800 hover:border-slate-700">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="accent-emerald-500 w-4 h-4 rounded"
              />
              <span>Numbers (0-9)</span>
            </label>
            <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer bg-slate-950/60 p-3 rounded-lg border border-slate-800 hover:border-slate-700">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="accent-emerald-500 w-4 h-4 rounded"
              />
              <span>Special Symbols</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
