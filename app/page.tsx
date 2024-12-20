import { Inria_Sans, VT323 } from 'next/font/google';

const inria = Inria_Sans({ 
  weight: ['400'],
  subsets: ['latin'],
});

const vt323 = VT323({ 
  weight: ['400'],
  subsets: ['latin'],
});

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#020202] text-[#fbfbfb] pt-12 px-[400px]">
      <article>
        <h1 className={`${vt323.className} text-[24px] mb-8 text-center`}>
          why we do things we don&apos;t think will work out
        </h1>
        <div className={`${inria.className} text-[16px] space-y-6 text-justify`}>
          <p>
            humans are paradoxical beings, often driven by forces that contradict logic. one reason we pursue seemingly doomed efforts is hope—the irrational spark that whispers, &quot;maybe, just maybe.&quot; this isn&apos;t blind optimism but an evolved survival mechanism. hope keeps us moving forward, especially when the alternative is despair.
          </p>
          <p>
            another factor is the need for closure. we&apos;d rather fail and know the outcome than live with the torment of &quot;what if?&quot; the unknown gnaws at us more than failure ever could.
          </p>
          <p>
            then there&apos;s the delusion of exceptionality. we convince ourselves we might be the one to defy the odds, that our story will somehow be different. it&apos;s a cocktail of ego and narrative bias—we&apos;ve been raised on tales of improbable success.
          </p>
          <p>
            let&apos;s not ignore rebellion. sometimes, we act against the probable because we resent being confined by it. a defiant &quot;i&apos;ll show them!&quot; attitude often drives our irrationality, even if no one is watching.
          </p>
          <p>
            finally, there&apos;s the value of experience. on some level, we understand that trying—even if it doesn&apos;t work—teaches us something. failure feeds growth, while inaction feeds regret. so, we leap, not because we think we&apos;ll land, but because standing still feels worse.
          </p>
        </div>
      </article>
    </div>
  );
}
