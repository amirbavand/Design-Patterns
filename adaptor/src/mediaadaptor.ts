import { MediaPlayer } from "./mediaplayer";
import { AdvancedMediaPlayer } from "./advancedmediaplayer";
import { VlcPlayer } from "./vlcplayer";
import { Mp4Player } from "./mp4player";

export class MediaAdapter implements MediaPlayer {
  public advancedMusicPlayer: AdvancedMediaPlayer;
  constructor(audioType: string) {
    this.advancedMusicPlayer = new Mp4Player(); //this make the default setting to Mp4Player

    if (audioType === "vlc") {
      this.advancedMusicPlayer = new VlcPlayer();
    } else if (audioType === "mp4") {
      this.advancedMusicPlayer = new Mp4Player();
    }
  }
  public play(audioType: string, fileName: string) {
    if (audioType === "vlc") {
      this.advancedMusicPlayer.playVlc(fileName);
    } else if (audioType === "mp4") {
      this.advancedMusicPlayer.playMp4(fileName);
    }
  }
}
