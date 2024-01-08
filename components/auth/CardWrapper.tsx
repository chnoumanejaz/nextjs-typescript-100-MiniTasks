import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Header from './Header';
import Social from './Social';
import Link from 'next/link';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
}) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <Link href={backButtonHref} className="bg-red-400">
          {backButtonLabel}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
