import * as React from "react";
import database from "../../database.json";

export default function About() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div>
        <table>
          <tr>
            <th>Uno Winning Leaderboard</th>
          </tr>
          <tr>
            <th></th>
            <th>Uno</th>
            <th>Uno Flip</th>
            <th>Uno 50th</th>
            <th>Uno Dare</th>
            <th>
              <strike>Uno All Wild</strike>
            </th>
            <th>Dos</th>
            <th>Uno Online</th>
          </tr>
          <tr>
            <th>Keegen</th>
            <th>{database.Keegen.uno}</th>
            <th>{database.Keegen.unoFlip}</th>
            <th>{database.Keegen.uno50}</th>
            <th>{database.Keegen.unoDare}</th>
            <th>{database.Keegen.unoAllWild}</th>
            <th>{database.Keegen.dos}</th>
            <th>{database.Keegen.unoOnline}</th>
          </tr>
          <tr>
            <th>Bricen</th>
            <th>{database.Bricen.uno}</th>
            <th>{database.Bricen.unoFlip}</th>
            <th>{database.Bricen.uno50}</th>
            <th>{database.Bricen.unoDare}</th>
            <th>{database.Bricen.unoAllWild}</th>
            <th>{database.Bricen.dos}</th>
            <th>{database.Bricen.unoOnline}</th>
          </tr>
          <tr>
            <th>Damen</th>
            <th>{database.Damen.uno}</th>
            <th>{database.Damen.unoFlip}</th>
            <th>{database.Damen.uno50}</th>
            <th>{database.Damen.unoDare}</th>
            <th>{database.Damen.unoAllWild}</th>
            <th>{database.Damen.dos}</th>
            <th>{database.Damen.unoOnline}</th>
          </tr>
          <tr>
            <th>Zane</th>
            <th>{database.Zane.uno}</th>
            <th>{database.Zane.unoFlip}</th>
            <th>{database.Zane.uno50}</th>
            <th>{database.Zane.unoDare}</th>
            <th>{database.Zane.unoAllWild}</th>
            <th>{database.Zane.dos}</th>
            <th>{database.Zane.unoOnline}</th>
          </tr>
          <tr>
            <th>Vaughn</th>
            <th>{database.Vaughn.uno}</th>
            <th>{database.Vaughn.unoFlip}</th>
            <th>{database.Vaughn.uno50}</th>
            <th>{database.Vaughn.unoDare}</th>
            <th>{database.Vaughn.unoAllWild}</th>
            <th>{database.Vaughn.dos}</th>
            <th>{database.Vaughn.unoOnline}</th>
          </tr>
          <tr>
            <th>Cyrus</th>
            <th>{database.Cyrus.uno}</th>
            <th>{database.Cyrus.unoFlip}</th>
            <th>{database.Cyrus.uno50}</th>
            <th>{database.Cyrus.unoDare}</th>
            <th>{database.Cyrus.unoAllWild}</th>
            <th>{database.Cyrus.dos}</th>
            <th>{database.Cyrus.unoOnline}</th>
          </tr>
          <tr>
            <th>Cheyenne</th>
            <th>{database.Cheyenne.uno}</th>
            <th>{database.Cheyenne.unoFlip}</th>
            <th>{database.Cheyenne.uno50}</th>
            <th>{database.Cheyenne.unoDare}</th>
            <th>{database.Cheyenne.unoAllWild}</th>
            <th>{database.Cheyenne.dos}</th>
            <th>{database.Cheyenne.unoOnline}</th>
          </tr>
        </table>
        <br />
        <br />
        <br />
        <br />

        <table>
          <tr>
            <th>
              Tetris
              <img src="https://cdn.glitch.global/3943dd29-ab7d-4dbc-888d-3bca1672b628/1411344-200.png?v=1644024670247" />
            </th>
          </tr>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Score</th>
            <th>Time</th>
          </tr>
          <tr>
            <th>1st</th>
            <th>Keegen</th>
            <th>88 Lines</th>
            <th>4/20/22</th>
          </tr>
          <tr>
            <th>2nd</th>
            <th>Vaughn</th>
            <th>87 Lines</th>
            <th>6/4/22</th>
          </tr>
          <tr>
            <th>3rd</th>
            <th>Jen</th>
            <th>78 Lines</th>
            <th>5/16/22</th>
          </tr>
          <tr>
            <th>4th</th>
            <th>Damen</th>
            <th>UNDER MAINTENANCE</th>
            <th>UNDER MAINTENANCE</th>
          </tr>
          <tr>
            <th>5th</th>
            <th>---</th>
            <th>---</th>
            <th>---</th>
          </tr>
          <tr></tr>
        </table>
        <br />
        <br />
        <table>
          <tr>
            <th>
              2048
              <img src="https://cdn.glitch.global/3943dd29-ab7d-4dbc-888d-3bca1672b628/5141446.png?v=1644024670247" />
            </th>
          </tr>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Score</th>
            <th>Time</th>
          </tr>

          <tr>
            <th>1st</th>
            <th>Vaughn</th>
            <th>8664</th>
            <th>---</th>
          </tr>
          <tr>
            <th>2nd</th>
            <th>---</th>
            <th>---</th>
            <th>---</th>
          </tr>
          <tr>
            <th>3rd</th>
            <th>---</th>
            <th>---</th>
            <th>---</th>
          </tr>
          <tr>
            <th>4th</th>
            <th>---</th>
            <th>---</th>
            <th>---</th>
          </tr>
          <tr>
            <th>5th</th>
            <th>---</th>
            <th>---</th>
            <th>---</th>
          </tr>
        </table>


        <table>
          <tr>
            <th>
              Galaga
              <img src="https://cdn.glitch.global/3943dd29-ab7d-4dbc-888d-3bca1672b628/imageedit_4_7945276174.png?v=1644432105528" />
            </th>
          </tr>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Score</th>
            <th>Level</th>
          </tr>

          <tr>
            <th>1st</th>
            <th>Vaughn</th>
            <th>38050</th>
            <th>8</th>
          </tr>
          <tr>
            <th>2nd</th>
            <th>---</th>
            <th>---</th>
            <th>---</th>
          </tr>
          <tr>
            <th>3rd</th>
            <th>---</th>
            <th>---</th>
            <th>---</th>
          </tr>
          <tr>
            <th>4th</th>
            <th>---</th>
            <th>---</th>
            <th>---</th>
          </tr>
          <tr>
            <th>5th</th>
            <th>---</th>
            <th>---</th>
            <th>---</th>
          </tr>
        </table>
      </div>
    </>
  );
}
