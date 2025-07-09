import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

function DownloadButton() {
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
          data: [{ ExeDownloads }],
        }),
      });

      if (response.ok) {
        // Redirect to Google Drive file (must be shared as "Anyone with link can view")
        window.open(
          "https://drive.google.com/file/d/1VsyIUYSXItl5lFBECnJ7CRKFjJaeKHed/view?usp=drive_link",
          "_blank"
        );
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
    <div className="space-x-4">
      <button onClick={() => setShowForm(true)} className="btn-lg">
        Download exe
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
          <input
            type="email"
            placeholder="Enter your Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input border px-2 py-1"
          />
          <button type="submit" disabled={loading} className="btn-lg bg-blue-500 text-white">
            {loading ? "Submitting..." : "Submit & Download"}
          </button>
        </form>
      )}
    </div>
  );
}
