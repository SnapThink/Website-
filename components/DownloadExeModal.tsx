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
        className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
        onClick={() => setShowForm(true)}
      >
        Get Started Free
      </Button>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get Started with SnapThink</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter your email to download SnapThink for Windows and start using local AI. Completely free to get started.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded">
              <span>💻</span>
              <span>Windows only • Mac and Linux versions coming soon</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="your-email@company.com"
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
                {loading ? "Processing..." : "Download for Windows"}
              </Button>
            </form>
            
            {/* Legal Disclaimers */}
            <div className="space-y-2 pt-2 border-t">
              <p className="text-xs text-muted-foreground">
                By downloading, you consent to us using your email for product updates and support.
              </p>
              <p className="text-xs text-muted-foreground">
                • Download starts immediately after submitting your email
              </p>
              <p className="text-xs text-muted-foreground">
                • We may send occasional product updates (you can unsubscribe anytime)
              </p>
              <p className="text-xs text-muted-foreground">
                • Free to use while we're building our community
              </p>
              <p className="text-xs text-muted-foreground">
                • Your data stays private and is never shared with third parties
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DownloadExeModal;
