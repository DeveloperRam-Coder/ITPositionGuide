import Link from "next/link";
import positionsData from "../../data/positions.json";
import { Position } from "../../types/positions";
import ColorfulCard from "../../components/ColorfulCard";

export default function Datascientist() {
  const transformedPositions = positionsData.positions.map((position) => ({
    ...position,
    resourcesForLearning: position.resourcesForLearning.map((resource: any) =>
      typeof resource === "string" ? resource : resource.name
    ),
  }));

  const DatascientistDeveloper: Position | undefined =
    transformedPositions.find((position: Position) => position.id === 6);

  return (
    <>
      <Link href="/" passHref>
        <span className="mt-4 text-3xl cursor-pointer hover:text-blue-700 transition-colors">
          🏠 {/* Home emoji */}
        </span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {DatascientistDeveloper && (
          <>
            <ColorfulCard
              title={DatascientistDeveloper.name || "Datascientist Developer"}
              content={
                <p className="text-lg text-gray-700">
                  {DatascientistDeveloper.description}
                </p>
              }
              colorClass="bg-gradient-to-r from-yellow-200 to-yellow-300"
            />

            <ColorfulCard
              title="Skills"
              content={
                <ul className="list-disc pl-6 text-gray-700">
                  {DatascientistDeveloper.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              }
              colorClass="bg-gradient-to-r from-blue-200 to-blue-300"
            />

            <ColorfulCard
              title="Responsibilities"
              content={
                <ul className="list-disc pl-6 text-gray-700">
                  {DatascientistDeveloper.responsibilities.map(
                    (responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    )
                  )}
                </ul>
              }
              colorClass="bg-gradient-to-r from-blue-200 to-blue-300"
            />

            <ColorfulCard
              title="Salary Range"
              content={
                <p className="text-lg text-gray-700">
                  {DatascientistDeveloper.salaryRange}
                </p>
              }
              colorClass="bg-gradient-to-r from-green-200 to-green-300"
            />

            <ColorfulCard
              title="Examples"
              content={
                <ul className="list-disc pl-6 text-gray-700">
                  {DatascientistDeveloper.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              }
              colorClass="bg-gradient-to-r from-green-200 to-green-300"
            />

            <ColorfulCard
              title="Career Progression"
              content={
                <>
                  {DatascientistDeveloper.careerProgression.map(
                    (progression, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-700">
                          {progression.level}
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700">
                          {progression.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                        <p className="text-lg text-gray-700">
                          {progression.salaryRange}
                        </p>
                      </div>
                    )
                  )}
                </>
              }
              colorClass="bg-gradient-to-r from-red-200 to-red-300"
            />

            <ColorfulCard
              title="Certifications"
              content={
                <ul className="list-disc pl-6 text-gray-700">
                  {DatascientistDeveloper.certifications.map(
                    (certification, index) => (
                      <li key={index}>
                        <h3 className="font-bold text-gray-800">
                          {certification.name}
                        </h3>
                        <p className="text-gray-700">
                          <strong>Provider:</strong> {certification.provider}
                        </p>
                        <p className="text-gray-700">
                          {certification.description}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              }
              colorClass="bg-gradient-to-r from-red-200 to-red-300"
            />

            <ColorfulCard
              title="Key Tools"
              content={
                <ul className="list-disc pl-6 text-gray-700">
                  {DatascientistDeveloper.keyTools.map((tool, index) => (
                    <li key={index}>
                      <strong>{tool.name}</strong>: {tool.description}
                    </li>
                  ))}
                </ul>
              }
              colorClass="bg-gradient-to-r from-purple-200 to-purple-300"
            />

            <ColorfulCard
              title="Future Scope"
              content={
                <ul className="list-disc pl-6 text-gray-700">
                  {DatascientistDeveloper.futureScope.map((scope, index) => (
                    <li key={index}>{scope}</li>
                  ))}
                </ul>
              }
              colorClass="bg-gradient-to-r from-purple-200 to-purple-300"
            />

            <ColorfulCard
              title="Challenges"
              content={
                <ul className="list-disc pl-6 text-gray-700">
                  {DatascientistDeveloper.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              }
              colorClass="bg-gradient-to-r from-purple-200 to-purple-300"
            />

            <ColorfulCard
              title="Common Interview Questions"
              content={
                <ul className="list-disc pl-6 text-gray-700">
                  {DatascientistDeveloper.commonInterviewQuestions.map(
                    (question, index) => (
                      <li key={index}>{question}</li>
                    )
                  )}
                </ul>
              }
              colorClass="bg-gradient-to-r from-teal-200 to-teal-300"
            />

            <ColorfulCard
              title="Resources for Learning"
              content={
                <ul className="list-disc pl-6 text-gray-700">
                  {DatascientistDeveloper?.resourcesForLearning.map(
                    (resource, index) => {
                      const match = resource.match(
                        /(.*) \((https?:\/\/[^\)]+)\)/
                      );
                      if (match) {
                        const [_, name, url] = match; // Destructure name and URL
                        return (
                          <li key={index}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              {name}
                            </a>
                          </li>
                        );
                      }
                      return <li key={index}>{resource}</li>; // Fallback for unmatched strings
                    }
                  )}
                </ul>
              }
              colorClass="bg-gradient-to-r from-teal-200 to-teal-300"
            />
          </>
        )}
      </div>
    </>
  );
}
