import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { setStudyTime, setMood, setSleep, setNotes, saveLog, loadLogs } from "./logSlice"

const getToday = () => new Date().toISOString().split("T")[0];

export default function StudyWellnessTracker() {
  const dispatch = useDispatch();
  const { logs, studyTime, mood, sleep, notes } = useSelector((state) => state.log);

  useEffect(() => {
    dispatch(loadLogs());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(saveLog({
      date: getToday(),
      studyTime: Number(studyTime),
      mood: Number(mood),
      sleep: Number(sleep),
      notes,
    }));
  };

  const feedback = () => {
    if (!logs.length) return "No data yet. Start logging to receive insights.";
    const last = logs[logs.length - 1];
    if (last.studyTime > 5 && last.mood < 4) return "You're studying hard, but your mood seems low. Consider taking a break.";
    if (last.sleep < 6) return "Not much sleep. Try getting some rest to boost focus.";
    if (last.studyTime >= 2) return "Nice job! You're building consistency.";
    return "Every small step counts. Keep going!";
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Daily Log - {getToday()}</h2>
          <Input type="number" placeholder="Hours Studied" value={studyTime} onChange={(e) => dispatch(setStudyTime(e.target.value))} />
          <Input type="number" placeholder="Mood (1-10)" value={mood} onChange={(e) => dispatch(setMood(e.target.value))} />
          <Input type="number" placeholder="Sleep Hours" value={sleep} onChange={(e) => dispatch(setSleep(e.target.value))} />
          <Textarea placeholder="Optional notes/reflection..." value={notes} onChange={(e) => dispatch(setNotes(e.target.value))} />
          <Button onClick={handleSubmit}>Save Log</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-medium mb-2">Insights</h2>
          <p>{feedback()}</p>
        </CardContent>
      </Card>

      {logs.length > 0 && (
        <Card>
          <CardContent>
            <h2 className="text-lg font-medium mb-4">Study & Mood Trends</h2>
            <LineChart width={400} height={250} data={logs}>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="studyTime" stroke="#8884d8" name="Study Hours" />
              <Line type="monotone" dataKey="mood" stroke="#82ca9d" name="Mood" />
            </LineChart>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
