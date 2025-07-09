'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"; // Make sure you have this component

function DownloadExeModal() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://sheetdb.io/api/v1/0fw81uxh32wyk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [{ ExeDownloads: email }],
        }),
      });

      if (response.ok) {
        window.open(
          "https://drive.google.com/file/d/1VsyIUYSXItl5lFBECnJ7CRKFjJaeKHed/view?usp=drive_link",
          "_blank"
        );
        setShowForm(false); // close modal
        setEmail(""); // reset email
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="default"
        className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
        onClick={() => setShowForm(true)}
      >
        Download exe
      </Button>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Your Gmail to Download</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="your-email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit & Download"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DownloadExeModal;
