import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';

const playlist = [
  { src: '/music/01-misty.mp3', title: 'Misty', artist: 'Erroll Garner' },
  { src: '/music/02-clair-de-lune.mp3', title: 'Clair de Lune', artist: 'Claude Debussy' },
  { src: '/music/03-gnossienne-no1.mp3', title: 'Gnossienne No. 1', artist: 'Erik Satie' },
  { src: '/music/04-preludio-c.mp3', title: 'Prelúdio em C BWV 846', artist: 'Johann Sebastian Bach' },
  { src: '/music/05-choros-no1.mp3', title: 'Chôros No. 1', artist: 'Heitor Villa-Lobos' },
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(playlist[currentTrack].src);
    audioRef.current.loop = false;
    audioRef.current.volume = 0.5;
    
    audioRef.current.addEventListener('ended', handleTrackEnd);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleTrackEnd);
        audioRef.current.pause();
      }
    };
  }, [currentTrack]);

  const handleTrackEnd = () => {
    const nextTrack = (currentTrack + 1) % playlist.length;
    setCurrentTrack(nextTrack);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentTrack].src;
      if (isPlaying && !isMuted) {
        audioRef.current.play().catch(() => {
          // Auto-play blocked by browser
        });
      }
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
      audioRef.current.play().catch(() => {
        // Browser blocked auto-play
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
    
    if (!newMuted && !isPlaying) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Music Player Button */}
      <div 
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          onClick={toggleMute}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
            isPlaying && !isMuted
              ? 'bg-gold/20 text-gold border border-gold/40'
              : 'bg-white/5 text-white/60 border border-white/10 hover:border-gold/30 hover:text-gold'
          }`}
        >
          {isMuted || !isPlaying ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
          <Music className="w-4 h-4" />
        </button>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-navy-light/95 backdrop-blur-md rounded-xl p-4 border border-gold/20 shadow-gold-lg z-50">
            <p className="text-gold text-xs font-medium mb-2">Escutando</p>
            <p className="text-white text-sm truncate">{playlist[currentTrack].artist}</p>
            <p className="text-white/60 text-xs truncate">{playlist[currentTrack].title}</p>
            
            {/* Track Controls */}
            <div className="flex items-center justify-center gap-3 mt-3 pt-3 border-t border-gold/10">
              <button 
                onClick={prevTrack}
                className="text-white/60 hover:text-gold transition-colors"
              >
                <SkipBack className="w-4 h-4" />
              </button>
              <button 
                onClick={togglePlay}
                className="text-gold hover:text-gold-light transition-colors"
              >
                {isPlaying && !isMuted ? (
                  <span className="text-xs">Pausar</span>
                ) : (
                  <span className="text-xs">Tocar</span>
                )}
              </button>
              <button 
                onClick={nextTrack}
                className="text-white/60 hover:text-gold transition-colors"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
