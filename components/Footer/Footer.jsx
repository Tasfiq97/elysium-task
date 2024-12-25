import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, LinkedinIcon as LinkedIn } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 py-8 mx-auto ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/tenants"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
                >
                  Tenants
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">+880-0192121122</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                <a
                  href="mailto:support@propertydash.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
                >
                  support@property.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">123 Property,dhaka 1209</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Follow Us</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
                asChild
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
                asChild
              >
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedIn className="w-4 h-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-200 dark:bg-gray-800" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 PropertyDash. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
