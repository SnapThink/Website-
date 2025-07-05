'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Button } from '@/components/ui/button'

export default function ContactSalesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('https://sheetdb.io/api/v1/0fw81uxh32wyk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [{ sales: email }], // 🔁 Use the 'sales' column
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        setEmail('')
      } else {
        alert('Error submitting email.')
      }
    } catch (err) {
      console.error('SheetDB error:', err)
      alert('Something went wrong.')
    }
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Contact Sales
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
              Contact Sales
            </Dialog.Title>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            ) : (
              <div className="mt-4 text-green-600 dark:text-green-400">
                Email submitted successfully!
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
