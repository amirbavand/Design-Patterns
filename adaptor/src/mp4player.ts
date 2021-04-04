import { AdvancedMediaPlayer } from "./advancedmediaplayer";
export class Mp4Player implements AdvancedMediaPlayer {
  public playVlc(fileName: string): void {}
  public playMp4(fileName: string): void {
    console.log("Playing mp4 file. Name: ", fileName);
  }
}
