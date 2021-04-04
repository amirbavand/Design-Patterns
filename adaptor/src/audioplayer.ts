import { MediaPlayer } from "./mediaplayer";
import { MediaAdapter } from "./mediaadaptor";

export class AudioPlayer implements MediaPlayer {
  public play(audioType: string, fileName: string) {
    if (audioType === "mp3") {
      console.log("Playing mp3 file. Name: ", fileName);
    } else if (audioType === "vlc" || audioType === "mp4") {
      const mediaAdapter = new MediaAdapter(audioType);
      mediaAdapter.play(audioType, fileName);
    } else {
      console.log("Invalid media. ", audioType, " format not supported");
    }
  }
}
