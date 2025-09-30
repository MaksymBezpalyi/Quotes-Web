const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Life is what happens when you're busy making other plans. — John Lennon",
  "Whether you think you can, or you think you can't—you're right. — Henry Ford",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
  "It always seems impossible until it's done. — Nelson Mandela",
  "What we think, we become. — Buddha",
  "The best way to predict the future is to create it. — Peter Drucker",
  "Dream big and dare to fail. — Norman Vaughan",
  "If you can dream it, you can do it. — Walt Disney",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. — William James",
  "Everything you can imagine is real. — Pablo Picasso",
  "Turn your wounds into wisdom. — Oprah Winfrey",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "If you're going through hell, keep going. — Winston Churchill",
  "Stay hungry, stay foolish. — Steve Jobs",
  "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
  "Well done is better than well said. — Benjamin Franklin",
  "The secret of getting ahead is getting started. — Mark Twain",
  "Action is the foundational key to all success. — Pablo Picasso",
  "Quality is not an act, it is a habit. — Aristotle",
  "Opportunities don't happen, you create them. — Chris Grosser",
  "Don't wait. The time will never be just right. — Napoleon Hill",
  "If opportunity doesn’t knock, build a door. — Milton Berle",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  "Doubt kills more dreams than failure ever will. — Suzy Kassem",
  "The future depends on what you do today. — Mahatma Gandhi",
  "Great things are done by a series of small things brought together. — Vincent van Gogh",
  "It does not matter how slowly you go so long as you do not stop. — Confucius",
  "If I cannot do great things, I can do small things in a great way. — Martin Luther King Jr.",
  "A year from now you may wish you had started today. — Karen Lamb",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "Either you run the day or the day runs you. — Jim Rohn",
  "Don’t wish it were easier; wish you were better. — Jim Rohn",
  "Make each day your masterpiece. — John Wooden",
  "The way to get started is to quit talking and begin doing. — Walt Disney",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "Perseverance is failing 19 times and succeeding the 20th. — Julie Andrews",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Will Durant",
  "I find that the harder I work, the more luck I seem to have. — Thomas Jefferson",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
  "Don't let what you cannot do interfere with what you can do. — John Wooden",
  "It's not whether you get knocked down, it's whether you get up. — Vince Lombardi",
  "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
  "If you want to lift yourself up, lift up someone else. — Booker T. Washington",
  "The man who moves a mountain begins by carrying away small stones. — Confucius",
  "Motivation is what gets you started. Habit is what keeps you going. — Jim Rohn",
  "Do one thing every day that scares you. — Eleanor Roosevelt",
  "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  "Failure is simply the opportunity to begin again, this time more intelligently. — Henry Ford",
  "If you’re not embarrassed by the first version of your product, you’ve launched too late. — Reid Hoffman",
  "Strive not to be a success, but rather to be of value. — Albert Einstein",
  "It’s not the load that breaks you down, it’s the way you carry it. — Lou Holtz",
  "Do the hard things. — Naval Ravikant",
  "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
  "If you want to go fast, go alone. If you want to go far, go together. — African Proverb",
  "Genius is 1% inspiration and 99% perspiration. — Thomas Edison",
  "If people are doubting how far you can go, go so far that you can’t hear them anymore. — Michele Ruiz",
  "I didn’t come this far to only come this far. — Unknown",
  "Not everything that is faced can be changed, but nothing can be changed until it is faced. — James Baldwin",
  "One day or day one. You decide. — Unknown",
  "What we fear of doing most is usually what we most need to do. — Ralph Waldo Emerson",
  "Small deeds done are better than great deeds planned. — Peter Marshall",
  "Success is walking from failure to failure with no loss of enthusiasm. — Winston Churchill",
  "Courage is resistance to fear, mastery of fear, not absence of it. — Mark Twain",
  "The harder the conflict, the greater the triumph. — George Washington",
  "Discipline equals freedom. — Jocko Willink",
  "Be so good they can’t ignore you. — Steve Martin",
  "You become what you give your attention to. — Epictetus",
  "Progress is impossible without change, and those who cannot change their minds cannot change anything. — George Bernard Shaw",
  "I am not a product of my circumstances. I am a product of my decisions. — Stephen R. Covey",
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "The best revenge is massive success. — Frank Sinatra",
  "It’s not about ideas. It’s about making ideas happen. — Scott Belsky",
  "Work hard in silence, let your success be your noise. — Frank Ocean",
  "Never let success get to your head; never let failure get to your heart. — Drake",
  "If you are not willing to risk the usual, you will have to settle for the ordinary. — Jim Rohn",
  "Failure defeats losers, failure inspires winners. — Robert Kiyosaki",
  "If you don’t like something, change it. If you can’t change it, change your attitude. — Maya Angelou",
  "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
  "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. — Jamie Paolinetti",
  "If you really look closely, most overnight successes took a long time. — Steve Jobs",
  "The best time to plant a tree was 20 years ago. The second best time is now. — Chinese Proverb",
  "Everything negative—pressure, challenges—is all an opportunity for me to rise. — Kobe Bryant",
  "Success isn’t owned, it’s leased. And rent is due every day. — J.J. Watt",
  "There is no substitute for hard work. — Thomas Edison",
  "It never gets easier, you just get better. — Jordan Hoechlin",
  "A goal without a plan is just a wish. — Antoine de Saint-Exupéry",
  "If you want something you’ve never had, you must be willing to do something you’ve never done. — Thomas Jefferson",
  "Do not wait to strike till the iron is hot; but make it hot by striking. — William Butler Yeats",
  "Don’t stop when you’re tired. Stop when you’re done. — Unknown",
  "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
  "Push yourself, because no one else is going to do it for you. — Unknown",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
  "Inspiration does exist, but it must find you working. — Pablo Picasso",
  "If you cannot do great things, do small things in a great way. — Napoleon Hill",
  "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
  "Success is the sum of small efforts repeated day in and day out. — Robert Collier",
  "You have to be at your strongest when you’re feeling at your weakest. — Unknown",
  "Your limitation—it’s only your imagination. — Unknown",
  "The key to success is to focus on goals, not obstacles. — Unknown",
  "Stay afraid, but do it anyway. — Carrie Fisher",
  "The magic you’re looking for is in the work you’re avoiding. — Unknown",
  "What you do today can improve all your tomorrows. — Ralph Marston",
  "The expert in anything was once a beginner. — Helen Hayes",
  "We become what we think about. — Earl Nightingale",
  "The best view comes after the hardest climb. — Unknown",
  "Difficult roads often lead to beautiful destinations. — Zig Ziglar",
  "Never give up, for that is just the place and time that the tide will turn. — Harriet Beecher Stowe",
  "Courage is one step ahead of fear. — Coleman Young",
  "Everything is figureoutable. — Marie Forleo",
  "Aim for the moon. If you miss, you may hit a star. — W. Clement Stone",
  "Successful people do what unsuccessful people are not willing to do. — Jim Rohn",
  "The only place where success comes before work is in the dictionary. — Vidal Sassoon",
  "Make it happen. Shock everyone. — Unknown",
  "Focus on being productive instead of busy. — Tim Ferriss",
  "If you think you are too small to make a difference, try sleeping with a mosquito. — Dalai Lama",
  "You must do the things you think you cannot do. — Eleanor Roosevelt",
  "I am not afraid… I was born to do this. — Joan of Arc",
  "Opportunities multiply as they are seized. — Sun Tzu",
  "The truth is rarely pure and never simple. — Oscar Wilde",
  "You can, you should, and if you’re brave enough to start, you will. — Stephen King",
  "Energy and persistence conquer all things. — Benjamin Franklin",
  "If you get tired, learn to rest, not to quit. — Banksy",
  "Do not wait for leaders; do it alone, person to person. — Mother Teresa",
  "He who is not courageous enough to take risks will accomplish nothing in life. — Muhammad Ali",
  "Fortune favors the bold. — Virgil",
  "The only person you are destined to become is the person you decide to be. — Ralph Waldo Emerson",
  "Talent wins games, but teamwork and intelligence win championships. — Michael Jordan",
  "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. — Aristotle",
  "A smooth sea never made a skilled sailor. — Franklin D. Roosevelt",
  "Go the extra mile. It’s never crowded there. — Dr. Wayne D. Dyer",
  "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
  "Work hard, be kind, and amazing things will happen. — Conan O’Brien",
  "I am building a fire, and every day I train, I add more fuel. At just the right moment, I light the match. — Mia Hamm"
];

const categories = {
  inspirational: quotes,
  funny: [
    "I'm on a seafood diet. I see food and I eat it.",
    "I used to think I was indecisive, but now I'm not so sure.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "I told my computer I needed a break, and it said: No problem — I'll go to sleep.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I would lose weight, but I hate losing.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "I asked my dog what's two minus two. He said nothing.",
    "I have an inferiority complex, but it's not a very good one.",
    "The future, the present, and the past walked into a bar. Things got a little tense.",
    "Why did the scarecrow win an award? He was outstanding in his field.",
    "I told a joke about a roof once... it went over everyone's head.",
    "I don't suffer from insanity — I enjoy every minute of it.",
    "I’m reading a book about anti-gravity. It’s impossible to put down!",
    "I couldn’t figure out why the baseball kept getting bigger. Then it hit me.",
    "I used to play piano by ear, but now I use my hands.",
    "My wallet is like an onion. Opening it makes me cry.",
    "If at first you don’t succeed, then skydiving definitely isn’t for you.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I have a fear of speed bumps, but I’m slowly getting over it."
  ],
  programming: [
    "There are only two hard things in Computer Science: cache invalidation and naming things. — Phil Karlton",
    "Talk is cheap. Show me the code. — Linus Torvalds",
    "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
    "Premature optimization is the root of all evil. — Donald Knuth",
    "Simplicity is the soul of efficiency. — Austin Freeman",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Weeks of coding can save you hours of planning.",
    "Deleted code is debugged code. — Jeff Sickel",
    "It's not a bug — it's an undocumented feature.",
    "If it works, don’t touch it.",
    "To iterate is human, to recurse divine. — L. Peter Deutsch",
    "Before software can be reusable it first has to be usable. — Ralph Johnson",
    "Good code is its own best documentation. — Steve McConnell",
    "The best error message is the one that never shows up. — Thomas Fuchs",
    "It works on my machine.",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in. — Edsger Dijkstra",
    "Make it work, make it right, make it fast. — Kent Beck",
    "Controlling complexity is the essence of computer programming. — Brian Kernighan",
    "There is nothing permanent except change — and JavaScript frameworks."
  ]
};

const movieQuotes = [
  { text: "May the Force be with you.", author: "", movie: "Star Wars" },
  { text: "I'll be back.", author: "", movie: "The Terminator" },
  { text: "Why so serious" + "?", author: "Joker", movie: "The Dark Knight" },
  { text: "I'm the king of the world!", author: "", movie: "Titanic" },
  { text: "Houston, we have a problem.", author: "", movie: "Apollo 13" },
  { text: "Say hello to my little friend!", author: "", movie: "Scarface" },
  { text: "Here's looking at you, kid.", author: "", movie: "Casablanca" },
  { text: "You talking to me" + "?", author: "", movie: "Taxi Driver" },
  { text: "I'm gonna make him an offer he can't refuse.", author: "", movie: "The Godfather" },
  { text: "Life finds a way.", author: "", movie: "Jurassic Park" },
  { text: "To infinity and beyond!", author: "Buzz Lightyear", movie: "Toy Story" }
];

let selectedCategory = 'inspirational';

function getCurrentCategoryArray() {
  if (selectedCategory === 'all') {
    return [
      ...categories.inspirational,
      ...categories.funny,
      ...categories.programming,
      ...movieQuotes.map((q) => q.author ? `${q.text} — ${q.author}` : q.text)
    ];
  }
  if (selectedCategory === 'movies') {
    return movieQuotes.map((q) => q.author ? `${q.text} — ${q.author}` : q.text);
  }
  return categories[selectedCategory] || categories.inspirational;
}

function getRandomQuote() {
  const pool = getCurrentCategoryArray();
  if (pool.length === 0) return "No quotes available.";
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

async function displayRandomQuote() {
  await loadQuoteAndGif();
}

async function loadQuoteAndGif() {
  const quoteEl = document.getElementById('quote');
  const gifEl = document.getElementById('gif');
  const newQuoteBtn = document.getElementById('new-quote');
  const favBtn = document.getElementById('fav-btn');

  setLoading(true, { quoteEl, gifEl, newQuoteBtn });
  let current = { text: '', author: '', movie: '' };
  let gifOverrideTag = '';

  if (selectedCategory === 'movies') {
    const mq = getRandomMovieQuote();
    current = { text: mq.text, author: mq.author || '', movie: mq.movie || '' };
    applyQuote(mq.author ? `${mq.text} — ${mq.author}` : mq.text, quoteEl);
    gifOverrideTag = mq.movie || '';
  } else {
    try {
      const { text, author } = await fetchQuoteFromApi(selectedCategory);
      current = { text, author, movie: '' };
      applyQuote(`${text}${author ? ` — ${author}` : ''}`, quoteEl);
     
      const maybeMovie = findMovieByQuoteText(text);
      if (maybeMovie) gifOverrideTag = maybeMovie;
    } catch (_) {
 
      const fallback = getRandomQuote();
      current = { text: fallback, author: '', movie: '' };
      applyQuote(fallback, quoteEl);
      const maybeMovie = findMovieByQuoteText(fallback);
      if (maybeMovie) gifOverrideTag = maybeMovie;
    }
  }

  try {

    const localUrl = getLocalGifUrlForQuote(current.text);
    let usedLocal = false;
    if (localUrl) {
      usedLocal = true;
      gifEl.hidden = false;
      gifEl.classList.add('is-hidden');
      gifEl.alt = `${current.text} GIF`;
      const handleError = async () => {
        try {
          const gifUrl = await fetchGifForCategory(selectedCategory, gifOverrideTag);
          if (gifUrl) {
            gifEl.hidden = false;
            gifEl.src = gifUrl;
            gifEl.alt = gifOverrideTag ? `${gifOverrideTag} GIF` : `${selectedCategory} GIF`;
          } else {
            gifEl.hidden = true;
            gifEl.removeAttribute('src');
          }
        } catch (_) {
          gifEl.hidden = true;
          gifEl.removeAttribute('src');
        }
      };
      gifEl.onerror = handleError;
      gifEl.src = localUrl;
   
      gifEl.onload = () => {
        requestAnimationFrame(() => gifEl.classList.remove('is-hidden'));
      };
    }

    if (!usedLocal) {
      const gifUrl = await fetchGifForCategory(selectedCategory, gifOverrideTag);
      if (gifUrl) {
        gifEl.hidden = false;
        gifEl.classList.add('is-hidden');
        gifEl.src = gifUrl;
        gifEl.alt = gifOverrideTag ? `${gifOverrideTag} GIF` : `${selectedCategory} GIF`;
        gifEl.onload = () => {
          requestAnimationFrame(() => gifEl.classList.remove('is-hidden'));
        };
      } else {
        gifEl.hidden = true;
        gifEl.removeAttribute('src');
      }
    }
  } catch (_) {
    gifEl.hidden = true;
    gifEl.removeAttribute('src');
  } finally {
  
    document.body.style.background = getRandomBackgroundGradient();
    setLoading(false, { quoteEl, gifEl, newQuoteBtn });

    if (favBtn) {
      const isFav = isFavorite(current);
      favBtn.classList.toggle('active', isFav);
      favBtn.title = isFav ? 'In favorites' : 'Add to favorites';
      favBtn.setAttribute('aria-pressed', String(isFav));
      favBtn.onclick = () => {
        addToFavorites(current);
      };
    }
  }
}

function applyQuote(text, quoteEl) {
 
  quoteEl.classList.add('is-hidden');
  setTimeout(() => {
    quoteEl.textContent = text;
    quoteEl.classList.remove('is-hidden');
  }, 260);
}

function setLoading(isLoading, refs) {
  const { quoteEl, gifEl, newQuoteBtn } = refs;
  const container = document.querySelector('.container');
  if (isLoading) {
    container && container.classList.add('loading');
    if (newQuoteBtn) newQuoteBtn.disabled = true;
    if (quoteEl) quoteEl.textContent = 'Loading…';
    if (gifEl) gifEl.hidden = true;
  } else {
    container && container.classList.remove('loading');
    if (newQuoteBtn) newQuoteBtn.disabled = false;
  }
}


const API_NINJAS_KEY = 'yG3ovtTC3PW2D5NFuBsP8A==9yVpYsB8C2tVg8z1';

async function fetchQuoteFromApi(category) {
  const apiCategory = mapCategoryToApiNinjasCategory(category);
  const url = apiCategory
    ? `https://api.api-ninjas.com/v1/quotes?category=${encodeURIComponent(apiCategory)}`
    : 'https://api.api-ninjas.com/v1/quotes';
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'X-Api-Key': API_NINJAS_KEY
    }
  });
  if (!res.ok) throw new Error('Quote fetch failed');
  const data = await res.json();
  const first = Array.isArray(data) && data.length > 0 ? data[0] : null;
  if (!first) throw new Error('Empty quotes');
  return { text: first.quote || first.text || '', author: first.author || '' };
}

function mapCategoryToApiNinjasCategory(category) {
  switch (category) {
    case 'inspirational':
      return 'inspirational';
    case 'funny':
      return 'funny';
    case 'programming':
      return 'computers';
    case 'movies':
  
      return '';
    case 'all':
    default:
      return '';
  }
}


const GIPHY_API_KEY = 'BtcgHxIb9f1sAvFOWZGdUv6Wd1e9S295';

async function fetchGifForCategory(category, overrideTag = '') {
  if (!GIPHY_API_KEY) {
    return '';
  }
  const tag = overrideTag || mapCategoryToGiphyTag(category);
  const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${encodeURIComponent(GIPHY_API_KEY)}&tag=${encodeURIComponent(tag)}&rating=pg-13`;
  const res = await fetch(endpoint, { headers: { 'Accept': 'application/json' } });
  if (!res.ok) throw new Error('GIF fetch failed');
  const data = await res.json();
  return data?.data?.images?.downsized_medium?.url || data?.data?.image_url || '';
}

function mapCategoryToGiphyTag(category) {
  switch (category) {
    case 'inspirational':
      return 'inspiration';
    case 'funny':
      return 'funny';
    case 'programming':
      return 'programming';
    case 'movies':
      return getRandomMovieTag();
    case 'all':
    default:
      return 'random';
  }
}

function getRandomMovieTag() {
  if (!movieQuotes.length) return 'movies';
  const pick = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
  return pick.movie || 'movies';
}

function getRandomMovieQuote() {
  return movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
}

function findMovieByQuoteText(text) {
  const match = movieQuotes.find((q) => q.text === text || text.startsWith(q.text));
  return match ? match.movie : '';
}

function getLocalGifUrlForQuote(text) {
  if (!text) return '';

  const encoded = encodeURIComponent(text);
  return `giphy/${encoded}.gif`;
}


window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('new-quote');
  button.addEventListener('click', () => {
    displayRandomQuote();
  });


  loadFavoritesFromStorage();
  renderFavorites();

  const categoryButtons = document.querySelectorAll('.category');
  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const newCategory = btn.getAttribute('data-category');
      selectedCategory = newCategory || 'inspirational';

      categoryButtons.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });

      displayRandomQuote();
    });
  });

  displayRandomQuote();
});

function getRandomBackgroundGradient() {
  const colorA = getRandomColorHsl();
  const colorB = getRandomColorHsl(40);
  return `linear-gradient(180deg, ${colorA} 0%, ${colorB} 100%)`;
}


const FAVORITES_STORAGE_KEY = 'rqg_favorites_v1';
let favorites = [];

function addToFavorites(item) {
  const canonical = canonicalizeQuote(item);
  if (!canonical.text) return;
  const exists = favorites.some((q) => canonicalizeQuote(q).text === canonical.text);
  if (exists) return;
  favorites.unshift(canonical);
  saveFavoritesToStorage();
  renderFavorites();
}

function isFavorite(item) {
  const canonical = canonicalizeQuote(item);
  return favorites.some((q) => canonicalizeQuote(q).text === canonical.text);
}

function canonicalizeQuote(item) {
  const text = (item.text || '').trim();
  const author = (item.author || '').trim();
  return { text, author };
}

function renderFavorites() {
  const list = document.getElementById('favorites-list');
  if (!list) return;
  list.innerHTML = '';
  if (favorites.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No favorites yet.';
    list.appendChild(li);
    return;
  }
  favorites.forEach((q, index) => {
    const li = document.createElement('li');
    const text = q.author ? `${q.text} — ${q.author}` : q.text;

    const span = document.createElement('span');
    span.textContent = text;
    span.style.display = 'inline-block';
    span.style.marginRight = '8px';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = '×';
    btn.title = 'Remove from favorites';
    btn.setAttribute('aria-label', 'Remove from favorites');
    btn.style.marginLeft = '8px';
    btn.style.border = 'none';
    btn.style.background = '#fee2e2';
    btn.style.color = '#991b1b';
    btn.style.borderRadius = '8px';
    btn.style.width = '28px';
    btn.style.height = '28px';
    btn.style.cursor = 'pointer';
    btn.onclick = () => removeFromFavorites(index);

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function saveFavoritesToStorage() {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  } catch (_) {

  }
}

function loadFavoritesFromStorage() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    favorites = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(favorites)) favorites = [];
  } catch (_) {
    favorites = [];
  }
}

function removeFromFavorites(index) {
  if (index < 0 || index >= favorites.length) return;
  favorites.splice(index, 1);
  saveFavoritesToStorage();
  renderFavorites();
}

function getRandomColorHsl(saturation = 60, lightness = 90) {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}


